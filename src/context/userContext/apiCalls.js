import axios from "axios";
import {
  deleteUserFail,
  deleteUserStart,
  deleteUserSuccess,
  createUserFail,
  createUserStart,
  createUserSuccess,
  getUsersStart,
  getUsersSuccess,
  getUsersFail,
  updateUserFail,
  updateUserStart,
  updateUserSuccess,
} from "./UserActions";

export const getUsers = async (dispatch) => {
  getUsersStart();
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFail());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFail());
  }
};

export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post("/auth/register", user);
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFail());
  }
};

export const updateUser = async (user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.put("/users/" + user._id, user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateUserSuccess(res.data));
    console.log("User updated successfully.");
  } catch (err) {
    dispatch(updateUserFail());
  }
};
