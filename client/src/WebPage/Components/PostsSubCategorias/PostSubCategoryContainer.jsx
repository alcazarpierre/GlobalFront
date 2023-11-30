import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByProjectCategory } from '../../../redux/actionsProjectCategories';
import PostSubCategoryCard from './PostSubCategoryCard';

function PostSubCategoryContainer ({postCategorySelector}) {

    const dispatch = useDispatch();
    const allEducationPost = useSelector((state) => state.reducerProjectCategories.allEducationPost);
    const allGenderPost = useSelector((state) => state.reducerProjectCategories.allGenderPost);
    const allWeatherPost = useSelector((state) => state.reducerProjectCategories.allWeatherPost);
    const allClubPost = useSelector((state) => state.reducerProjectCategories.allClubPost);
    const allTeamPost = useSelector((state) => state.reducerProjectCategories.allTeamPost);
    const error = useSelector((state) => state.reducerProjectCategories.error);



    let categorySelectorPost;

  
    
    switch (postCategorySelector) {
      case 1:
        categorySelectorPost = allEducationPost;
        break;
      case 2:
        categorySelectorPost = allGenderPost;
        break;
      case 3:
        categorySelectorPost = allWeatherPost;
        break;
      case 4:
        categorySelectorPost = allClubPost;
        break;
      case 5:
        categorySelectorPost = allTeamPost;
        break;
      default:
        alert('Hubo un error trayendo las publicaciones');
        break;
    }

    useEffect(() => {
        if(categorySelectorPost.length ===0){
            dispatch(getPostByProjectCategory(postCategorySelector));
        }
    }, );

    if (error) {
        console.error('Error fetching posts:', error);
    }

    return (
        <div className="post-subCategory-container">
            {categorySelectorPost.map((item) => (
                <PostSubCategoryCard
                    id={item.id}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    categories={item.categories}
                    projectcategory={item.projectCategory.name}
                    location={item.location}
                />
            ))}

        </div>
    );
};

export default PostSubCategoryContainer;