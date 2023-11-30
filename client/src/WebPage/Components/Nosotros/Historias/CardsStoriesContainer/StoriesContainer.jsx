import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../../../../../redux/actionsStories";
import CardStories from "../CardStories/CardStories";
import "./StoriesContainer.modules.css";

const Stories = () => {

  const dispatch = useDispatch();
  const allStories = useSelector((state) => state.reducerStories.allStories);

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  return (
    <div>
   
      <div>
        {allStories.map((story) => (
          <CardStories
            key={story.id}
            title={story.title}
            image={story.image}
            date={story.date}
            description={story.description}
            location={story.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
