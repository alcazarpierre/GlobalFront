import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../../../../redux/actionsFaqs";
import DashFaq from "../CardDash-Faq/DashFaq";

import "./DashFaqContainer.modules.css"

function DashFaqContainer () {
    
    const dispatch = useDispatch();
    const allFaqs = useSelector((state) => state.reducerFaqs.allFaqs);

    useEffect(() => {
        if(allFaqs.length ===0){
            dispatch(getFaqs());
        }
    }, [dispatch]);

    return(
        <div className="faqContainer-dash">
            {allFaqs.map((faq) => (
                <DashFaq
                    id={faq.id}
                    key={faq.id}
                    ask={faq.ask}
                    answer={faq.answer} 
                />
            ))}
        </div>
    );
};

export default DashFaqContainer;