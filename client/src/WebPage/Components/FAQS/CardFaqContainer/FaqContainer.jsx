import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../../../redux/actionsFaqs";
import CardFaq from "../CardFaq/CardFaq";
import "./FaqContainer.modules.css";

function FaqContainer () {
    
    const dispatch = useDispatch();
    const allFaqs = useSelector((state) => state.reducerFaqs.allFaqs);

    useEffect(() => {
        if(allFaqs.length ===0){
            dispatch(getFaqs());
        }
    }, [dispatch]);

    return(
        <div className="card-faq-container">
            {allFaqs.map((faq) => (
                <CardFaq
                    id={faq.id}
                    key={faq.id}
                    ask={faq.ask}
                    answer={faq.answer} 
                />
            ))}
        </div>
    );
};

export default FaqContainer;