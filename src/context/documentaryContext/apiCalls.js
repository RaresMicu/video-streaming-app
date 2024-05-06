import axios from "axios";
import {
  deleteDocumentaryFail,
  deleteDocumentaryStart,
  deleteDocumentarySuccess,
  createDocumentaryFail,
  createDocumentaryStart,
  createDocumentarySuccess,
  getDocumentariesStart,
  getDocumentariesSuccess,
  getDocumentariesFail,
  updateDocumentaryFail,
  updateDocumentaryStart,
  updateDocumentarySuccess,
} from "./DocumentaryActions";

export const getDocumentaries = async (dispatch) => {
  getDocumentariesStart();
  try {
    const res = await axios.get("/documentaries", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getDocumentariesSuccess(res.data));
  } catch (err) {
    dispatch(getDocumentariesFail());
  }
};

export const deleteDocumentary = async (id, dispatch) => {
  dispatch(deleteDocumentaryStart());
  try {
    await axios.delete("/documentaries/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteDocumentarySuccess(id));
  } catch (err) {
    dispatch(deleteDocumentaryFail());
  }
};

export const createDocumentary = async (documentary, dispatch) => {
  dispatch(createDocumentaryStart());
  try {
    const res = await axios.post("/documentaries", documentary, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createDocumentarySuccess(res.data));
  } catch (err) {
    dispatch(createDocumentaryFail());
  }
};

export const updateDocumentary = async (documentary, dispatch) => {
  dispatch(updateDocumentaryStart());
  try {
    const res = await axios.put(
      "/documentaries/" + documentary._id,
      documentary,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(updateDocumentarySuccess(res.data));
    console.log("Documentary updated successfully.");
  } catch (err) {
    dispatch(updateDocumentaryFail());
  }
};
