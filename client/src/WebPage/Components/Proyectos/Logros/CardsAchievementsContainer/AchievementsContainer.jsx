import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAchievements } from "../../../../../redux/actionsAchievements";
import "./AchievementsContainer.modules.css";
import CardAchievements from "../CardAchievements/CardAchievements";
const Achievements = () => {
  
  const dispatch = useDispatch();
  const allAchievements = useSelector((state) => state.reducerAchievements.allAchievements);

  useEffect(() => {
    dispatch(getAchievements());
  }, [dispatch]);

 
  return (
    <div>
      <h2>Logros</h2>
      <div>
        {allAchievements.map((achievements) => (
          <CardAchievements
            key={achievements.id}
            title={achievements.title}
            image={achievements.image}
            date={achievements.date}
            description={achievements.description}
            location={achievements.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
