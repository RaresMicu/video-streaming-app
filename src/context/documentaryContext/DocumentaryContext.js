import DocumentaryReducer from "./DocumentaryReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  documentaries: [],
  isFetching: false,
  error: false,
};

export const DocumentaryContext = createContext(INITIAL_STATE);

export const DocumentaryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DocumentaryReducer, INITIAL_STATE);

  return (
    <DocumentaryContext.Provider
      value={{
        documentaries: state.documentaries,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </DocumentaryContext.Provider>
  );
};
