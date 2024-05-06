const DocumentaryReducer = (state, action) => {
  switch (action.type) {
    case "GET_DOCUMENTARIES_START":
      return {
        documentaries: null,
        isFetching: true,
        error: false,
      };
    case "GET_DOCUMENTARIES_SUCCESS":
      return {
        documentaries: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_DOCUMENTARIES_FAIL":
      return {
        documentaries: null,
        isFetching: false,
        error: true,
      };
    case "DELETE_DOCUMENTARY_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_DOCUMENTARY_SUCCESS":
      return {
        documentaries: state.documentaries.filter(
          (doc) => doc._id !== action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "DELETE_DOCUMENTARY_FAIL":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_DOCUMENTARY_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_DOCUMENTARY_SUCCESS":
      return {
        documentaries: [...state.documentaries, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_DOCUMENTARY_FAIL":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_DOCUMENTARY_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_DOCUMENTARY_SUCCESS":
      return {
        documentaries: state.documentaries.map(
          (documentary) =>
            documentary._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_DOCUMENTARY_FAIL":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default DocumentaryReducer;
