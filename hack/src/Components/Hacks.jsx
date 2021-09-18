import React from "react";
import { useGlobalContext } from "../util/context";

const Hacks = () => {
  const { hits, removeHack, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="hacks">
      {hits.map((hack) => {
        const {
          title,
          points,
          author,
          num_comments: comments,
          url,
          objectID: id,
        } = hack;

        return (
          <article className="hack">
            <div className="hack-info">
              <h4 className="title">{title}</h4>
              <div>
                {points} points by {author} | {comments} comments
              </div>
            </div>
            <div className="hack-buttons">
              <a  classname="read-btn" href={url}>
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => {
                  removeHack(id);
                }}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Hacks;
