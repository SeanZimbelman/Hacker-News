import React, { useState, useContext } from "react";
import { useFetch } from "./useFetch";

const HackContext = React.createContext();

export const HackProvider = ({ children }) => {
  const [query, setQuery] = useState("React");
  const [page, setPage] = useState(0)
  const {loading, error, hacks, nbPages} = useFetch(`query=${query}&page=${page}&`)

  return (
    <HackContext.Provider value={{ query, setQuery, loading, error, hacks, page, setPage, nbPages }}>
      {children}
    </HackContext.Provider>
  );
};

export const useHackContext = () => {
  return useContext(HackContext);
};


