import React, {useState} from "react";
import "./CardwebFaq.modules.css"

const CardFaq = ({id, ask, answer}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={`card-web-faq ${isActive ? 'active' : ''}` } onClick={toggleActive}>
        <div className="ask-web-faq">
          <h3 >{ask}</h3>
          <svg width='15' height='10' viewBox="0 0 42 25">
            <path 
              d="M3 3L21 21L39 3" 
              stroke='#1a5a9e' 
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <div className='answer-web-faq'>
          <p>{answer}</p>
        </div>
      </div>
      
    </>
      
  );
};

export default CardFaq;