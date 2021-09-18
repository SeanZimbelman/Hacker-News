import React, { useReducer, useContext, useEffect, useState } from "react";
import { reducer } from "./reducer";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  loading: true,
  hits: [],
  nbPages: 50,
  page: 0,
  query: "Twitter",
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [newPage, setNewPage] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_HITS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  //add more dispatches for changing the story/ data

  const handleSearch = (query) => {
    dispatch({ type: "HANDLE_SEARCH", payload: query });
  };
  // const pageUp = () => {
  //   setNewPage(state.page + 1);
  //   console.log(`${newPage} : ${state.nbPages}`);
  //   if (newPage < state.nbPages - 1) {
  //     dispatch({ type: "PAGE_UP" });
  //   } else {
  //     dispatch({ type: "PAGE_MIN" });
  //   }
  // };
  // const pageDown = () => {
  //   setNewPage(state.page - 1);
  //   console.log(`${newPage} : ${state.nbPages}`);
  //   if (newPage > 0) {
  //     dispatch({ type: "PAGE_DOWN" });
  //   } else {
  //     dispatch({ type: "PAGE_MAX" });
  //   }
  // };
  const hanndlePage = (value) => {
    dispatch({ type: "HANNDLE_PAGE", payload: value });
  };
  const setPage = (value) => {
    value = Number(value);
    if (isNaN(value)) {
      value = state.page;
    }
    if (value >= state.nbPages) {
      value = state.nbPages - 1;
    }
    dispatch({ type: "SET_PAGE", payload: value });
  };
  const removeHack = (id) => {
    dispatch({ type: "REMOVE_HIT", payload: id });
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, handleSearch, hanndlePage, removeHack, setPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
