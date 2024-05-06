export const getDocumentariesStart = () => ({
  type: "GET_DOCUMENTARIES_START",
});
export const getDocumentariesSuccess = (documentaries) => ({
  type: "GET_DOCUMENTARIES_SUCCESS",
  payload: documentaries,
});
export const getDocumentariesFail = () => ({
  type: "GET_DOCUMENTARIES_FAIL",
});

export const deleteDocumentaryStart = () => ({
  type: "DELETE_DOCUMENTARY_START",
});
export const deleteDocumentarySuccess = (id) => ({
  type: "DELETE_DOCUMENTARY_SUCCESS",
  payload: id,
});
export const deleteDocumentaryFail = () => ({
  type: "DELETE_DOCUMENTARY_FAIL",
});

export const createDocumentaryStart = () => ({
  type: "CREATE_DOCUMENTARY_START",
});
export const createDocumentarySuccess = (documentary) => ({
  type: "CREATE_DOCUMENTARY_SUCCESS",
  payload: documentary,
});
export const createDocumentaryFail = () => ({
  type: "CREATE_DOCUMENTARY_FAIL",
});

export const updateDocumentaryStart = () => ({
  type: "UPDATE_DOCUMENTARY_START",
});
export const updateDocumentarySuccess = (documentary) => ({
  type: "UPDATE_DOCUMENTARY_SUCCESS",
  payload: documentary,
});
export const updateDocumentaryFail = () => ({
  type: "UPDATE_DOCUMENTARY_FAIL",
});
