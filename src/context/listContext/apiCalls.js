import axios from "axios";
import {
  getListsStart,
  getListsSuccess,
  getListsFail,
  deleteListFail,
  deleteListStart,
  deleteListSuccess,
  updateListFail,
  updateListStart,
  updateListSuccess,
  createListFail,
  createListStart,
  createListSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFail());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFail());
  }
};

export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFail());
  }
};

export const updateList = async (list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axios.put("/lists/" + list._id, list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateListSuccess(res.data));
    console.log("List updated successfully.");
  } catch (err) {
    dispatch(updateListFail());
  }
};
