import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getNewsEvent } from '../../../../../redux/actionsNews';
import CardNews from '../CardNews/CardNews';

const NewsContainer = () => {

    const dispatch = useDispatch();
    const allNews = useSelector((state) => state.reducerNews.allNews);

    useEffect (() => {
        if(allNews.length ===0){
            dispatch(getNewsEvent());
        }
    },[dispatch]);

  return (
    <div>
        <div>
            {allNews.map((news) => (
                <CardNews
                    key={news.id}
                    title={news.title}
                    image={news.image}
                    date={news.date}
                    description={news.description}
                    location={news.location}
                />

            ))}
        </div>
    </div>
  )
}

export default NewsContainer;