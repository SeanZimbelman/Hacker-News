import React, { useState, useEffect } from "react";
const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?`;

export const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [hacks, setHacks] = useState([]);
  const [nbPages, setNbPages] = useState(0);

  const fetchHacks = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setHacks(data.hits);
      setNbPages(data.nbPages)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${query}`);
    fetchHacks(`${API_ENDPOINT}${query}`);
  }, [query]);

  return { loading, error, hacks, nbPages };
};
