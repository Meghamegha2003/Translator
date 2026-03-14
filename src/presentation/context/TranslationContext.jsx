import { createContext, useReducer } from "react";

export  const TranslationContext = createContext();

const initalState = {
  result: "",
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };

    case "SUCCESS":
      return { result: action.payload, loading: false, error: null };

    case "ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

  export function TranslationProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initalState);
    return (
      <TranslationContext.Provider value={{ state, dispatch }}>
        {children}
      </TranslationContext.Provider>
    );
  }

