import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByProjectCategory } from '../../../redux/actionsProjectCategories';
import { getCompletePost } from '../../../redux/actionsPosts';
import StorageCard from './StorageCard';
import "./StorageCardContainer.modules.css";

const StorageCardContainer = () => {
    const dispatch = useDispatch();
    const completePost = useSelector((state) => state.reducerProjects.completePost);
    const allEducationPost = useSelector((state) => state.reducerProjectCategories.allEducationPost);
    const allGenderPost = useSelector((state) => state.reducerProjectCategories.allGenderPost);
    const allWeatherPost = useSelector((state) => state.reducerProjectCategories.allWeatherPost);
    const allClubPost = useSelector((state) => state.reducerProjectCategories.allClubPost);
    const allTeamPost = useSelector((state) => state.reducerProjectCategories.allTeamPost);
    const error = useSelector((state) => state.reducerProjectCategories.error);

    const [visibleCards, setVisibleCards] = useState(4); 

    const localStorageValue = JSON.parse(localStorage.getItem("interes"));
       
    useEffect(() => {
        
        if (!localStorageValue){
            dispatch(getCompletePost());
        } else {
            dispatch(getPostByProjectCategory(localStorageValue));
        }
    }, [dispatch]);

    const handleNextButtonClick = () => {
        
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
    };

    const handlePrevButtonClick = () => {
      
        setVisibleCards((prevVisibleCards) => Math.max(4, prevVisibleCards - 4));
    };

    let sliderPost;
    
    switch (localStorageValue) {
      case 1:
        sliderPost = allEducationPost;
        break;
      case 2:
        sliderPost = allGenderPost;
        break;
      case 3:
        sliderPost = allWeatherPost;
        break;
      case 4:
        sliderPost = allClubPost;
        break;
      case 5:
        sliderPost = allTeamPost;
        break;
      default:
        sliderPost = completePost;
        break;
    }


    if (error) {
        console.error('Error fetching posts:', error);
    }

    return (
        <div className="storageCardContainer">
            {sliderPost.slice(0, visibleCards).map((item) => (
                <StorageCard
                    id={item.id}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    categories={item.categories}
                    projectcategory={item.projectCategory.name}
                />
            ))}

            {allEducationPost.length > visibleCards && (
                <div className="storageCardContainer-buttonContainer">
                    <button className="storageCardContainer-prevButton" onClick={handlePrevButtonClick}>
                        Anterior
                    </button>
                    <button className="storageCardContainer-nextButton" onClick={handleNextButtonClick}>
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
};

export default StorageCardContainer;