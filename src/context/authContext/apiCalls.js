import axios from "axios";
import { loginStart, loginSuccess, loginFail } from "./AuthActions";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", userCredentials);
    res.data && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
  }
};
