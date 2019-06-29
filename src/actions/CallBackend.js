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

  export const putWithJSONBody = body => ({
    method: 'PUT',
    ...jsonBody(body)
  })

export const SAVE_GAME  = fetchConstants("SAVE_GAME")

export const LOGIN_USER = fetchConstants("LOGIN_USER")

export function fetchConstants(prefix) {
  return {
    "loading": prefix + "_LOADING",
    "ok": prefix + "_OK",
    "error": prefix + "_ERROR"
  }
}

export function loginUsuario(username) {
  return createAsyncAction(
    () => fetch("api/"+username), 
    LOGIN_USER,
    json => {return { username: json}},
    {username}
  );
}

export function saveUsuarioFabrica(username,idFabrica,ganancias, celdas) {
  return createAsyncAction(
    () => fetch("/api/"+username+"/fabricas/"+idFabrica, putWithJSONBody({ganancias, celdas})), 
    SAVE_GAME,
    json => {return { fabrica: json}},
    {}
  );
}

/*
async function getfabrica(URL) {
  try {
    const resp = await fetch(URL);
    const json = await resp.json();
    return json;
  } catch (err) {
       console.log("Error al obtener fabrica "+URL)
       console.log(err)
  }
}
*/
/*
getfabrica("/api/medici/fabricas/85").then(fabrica => {
  if(fabrica !== undefined){
    console.log("Modifica la fabrica");
 }else{
    console.log("Crea la fabrica");
    createAsyncAction(
      () => fetch("api/fabrica", postWithJSONBody({idJuego, ganancias, celdas})), 
      SAVE_GAME,
      json => {return { gameSate: json}}
    );
 }
});
*/

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
        console.log(json);
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