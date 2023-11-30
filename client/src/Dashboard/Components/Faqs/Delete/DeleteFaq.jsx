import { deleteFaq, getFaqs } from "../../../../redux/actionsFaqs";


export const handleDeleteFaq = async (id, dispatch) => {
    const confirmDelete = window.confirm ("Confirme la eliminacion de esta Pregunta y Respuesta");
    if (confirmDelete) {
        await dispatch(deleteFaq(id));
        dispatch (getFaqs());
    }
};