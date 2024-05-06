export const getListsStart = () => ({
  type: "GET_LISTS_START",
});
export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});
export const getListsFail = () => ({
  type: "GET_LISTS_FAIL",
});

export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});
export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});
export const deleteListFail = () => ({
  type: "DELETE_LIST_FAIL",
});

export const createListStart = () => ({
  type: "CREATE_LIST_START",
});
export const createListSuccess = (list) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: list,
});
export const createListFail = () => ({
  type: "CREATE_LIST_FAIL",
});

export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});
export const updateListSuccess = (list) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: list,
});
export const updateListFail = () => ({
  type: "UPDATE_LIST_FAIL",
});
