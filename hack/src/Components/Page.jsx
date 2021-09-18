import React from "react";
import { useGlobalContext } from "../util/context";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { reducer } from "../util/reducer";

const Page = () => {
  const { loading, page, nbPages, hanndlePage, setPage } = useGlobalContext();
  return (
    <div className="page-buttons">
      {loading ? (
        <button className="btn">
          <FaArrowAltCircleLeft />
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            hanndlePage("dec");
          }}
        >
          <FaArrowAltCircleLeft />
        </button>
      )}
      <input
        type="text"
        className="page-imput"
        value={page + 1}
        onChange={(e) => setPage(e.target.value - 1)}
      />
      of {nbPages}
      {loading ? (
        <button className="btn">
          <FaArrowAltCircleRight />
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            hanndlePage("inc");
          }}
        >
          <FaArrowAltCircleRight />
        </button>
      )}
    </div>
  );
};

export default Page;
