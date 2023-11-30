import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsEvent } from '../../../../../redux/actionsNews';
import CardEvent from '../CardEvent/CardEvent';
import "./EventContainer.modules.css";

function EventContainer() {

    const dispatch = useDispatch();
    const allEvents = useSelector((state) => state.reducerNews.allEvents);

    useEffect (() => {
        if(allEvents.length ===0){
            dispatch(getNewsEvent());
        }
    },[dispatch]);


  return (
    <div>
        <div>
            {allEvents.map((event) => (
                <CardEvent
                    key={event.id}
                    categories={event.categories}
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    description={event.description}
                    projectCategoryId={event.projectCategoryId}
                    location={event.location}
                />

            ))}
        </div>

    </div>
  )
}

export default EventContainer;