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

export const GET_FABRICA = fetchConstants("GET_FABRICA")

export const CREAR_FABRICA = fetchConstants("CREAR_FABRICA")


export function fetchConstants(prefix) {
  return {
    "loading": prefix + "_LOADING",
    "ok": prefix + "_OK",
    "error": prefix + "_ERROR"
  }
}

/** Hace el login de un usuario */
export function login(username) {
  return createAsyncAction(
    () => fetch("api/"+username), 
    LOGIN_USER,
    json => {return { fabrica: json}},
    {}
  );
}

/** Guarda la fabrica de un usuario en base */
export function saveUsuarioFabrica(username,idFabrica,ganancias, celdas) {
  return createAsyncAction(
    () => fetch("/api/"+username+"/fabricas/"+idFabrica, putWithJSONBody({ganancias, celdas})), 
    SAVE_GAME,
    json => {return { fabrica: json}},
    {}
  );
}

/** Obtener fabrica */
export function getFabrica(ganancias, idFabrica, celdas) {
  return {
    type: 'GET_FABRICA',
    idFabrica,
    ganancias,
    celdas
  };
}

/** Crear 1  fabrica */
export function crearFabrica(username, nombre) {

  return createAsyncAction(
    () => fetch("/api/"+username+"/fabrica", postWithJSONBody({nombre})), 
    CREAR_FABRICA,
    json => {return { fabrica: json}},
    {}
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
        //console.log(json);
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