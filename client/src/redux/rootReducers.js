import { combineReducers } from "redux";

import reducerMembers from "./reducerMembers";
import reducerProjects from "./reducerProjects";
import reducerAchievements from "./reducerAchievements";
import reducerStories from "./reducerStories";
import reducerNews from "./reducerNews";
import reducerFaqs from "./reducerFaqs";
import reducerLogin from "./reducerLogin";
import reducerFooter from "./reducerFooter";
import reducerProjectCategories from "./reducerProjectCategories";

const rootReducer = combineReducers({
   reducerMembers,
   reducerProjects,
   reducerAchievements,
   reducerStories,
   reducerNews,
   reducerFaqs,
   reducerLogin,
   reducerFooter,
   reducerProjectCategories
});

export default rootReducer;