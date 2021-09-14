import React from "react";
import { useHackContext } from "../util/context";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Page = () => {
  const { loading, page, setPage, nbPages } = useHackContext();
  return (
    <div className="buttons">
      {loading ? (
        <button>
          <FaArrowAltCircleLeft />
        </button>
      ) : (
        <button
          onClick={() => {
            if (page - 1 < 0) {
              setPage(nbPages - 1);
            } else {
              setPage(page - 1);
            }
          }}
        >
          <FaArrowAltCircleLeft />
        </button>
      )}
      {page + 1} of {nbPages}
      {loading ? (
        <button>
          <FaArrowAltCircleRight />
        </button>
      ) : (
        <button
          onClick={() => {
            if (page + 1 >= nbPages) {
              setPage(0);
            } else {
              setPage(page + 1);
            }
          }}
        >
          <FaArrowAltCircleRight />
        </button>
      )}
    </div>
  );
};

export default Page;
