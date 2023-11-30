import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { handleDeleteFaq } from "../../Delete/DeleteFaq";
import "./DashFaq.modules.css"


const DashFaq = ({id, ask, answer}) => {
    const dispatch = useDispatch();

    return (
        <div className="dashFaq-Contenedor">
            <div className="faq-Content">
                <h3>{ask}</h3>
                <p>{answer}</p>
            </div>

            <div className="delete-button">
            <button onClick={()=>{handleDeleteFaq(id, dispatch)}}><RiDeleteBin6Line /></button>
            </div>
        </div>
    );
};

export default DashFaq;