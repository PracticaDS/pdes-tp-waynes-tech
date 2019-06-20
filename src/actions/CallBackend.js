import _ from "lodash"

const jsonBody = body => ({
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  
  export const postWithJSONBody = body => ({
    method: 'POST',
    ...jsonBody(body)
  })

export const SAVE_GAME = fetchConstants("SAVE_GAME")


export function fetchConstants(prefix) {
  return {
    "loading": prefix + "_LOADING",
    "ok": prefix + "_OK",
    "error": prefix + "_ERROR"
  }
}

export function saveUsuarioFabrica(idJuego, ganancias, celdas) {
    return createAsyncAction(
      () => fetch("api/fabrica", postWithJSONBody({idJuego, ganancias, celdas})), 
      SAVE_GAME,
      json => {return { gameSate: json}}
    );
}


  
function createAsyncAction(fetchRequest, 
    fetchConstants, 
    jsonToAction = json => {return {response: json}},
    loadingParams = {},
    onSuccess
    ) {
    return async dispatch => {
      dispatch({ type: fetchConstants.loading, ...loadingParams })
      try {
        const response = await fetchRequest();
        const json = await response.json();
        if (response.ok) {
          dispatch({ type: fetchConstants.ok, ...jsonToAction(json) })
          if(_.isFunction(onSuccess)){
            onSuccess(dispatch, json)
          }
        } else {
          const message = json.status ? json.status : response.statusText;
          dispatch({ type: fetchConstants.error, message: message })
        }
      } catch (error) {
        dispatch({ type: fetchConstants.error, message: error.message});
      }
    }
  }