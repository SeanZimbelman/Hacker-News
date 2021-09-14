import React from "react";
import { useHackContext } from "../util/context";

const Hacks = () => {
  const { hacks, loading } = useHackContext();

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="hacks">
      {hacks.map((hack) => {
        const { title, points, author, num_comments : comments, url } = hack;

        return (
            <article>
              <div className="hack-info">
                <h4 className="title">{title}</h4>
                <div>{points} points by {author} | {comments} comments</div>
              </div>
              <div className="buttons"><a href={url} classname='btn'>read more</a>     <button>remove</button></div>
            </article>
        );
      })}
    </section>
  );
};

export default Hacks;
