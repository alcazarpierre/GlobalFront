import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactInfo } from "../../../../redux/actionFooter";
import ContactInfoCard from "./ContactInfo"


function ContactInfoContainer () {

    const dispatch = useDispatch();
    const allContactInfo = useSelector((state) => state.reducerFooter.allContactInfo);

  useEffect(() => {
    if(allContactInfo.length ===0){
        dispatch(getContactInfo());
    }
}, [dispatch]);

return (
  <div className="card-footer">
    <ContactInfoCard
      key={allContactInfo.id}
      address={allContactInfo.address}
      phone={allContactInfo.phone}
      schedule={allContactInfo.schedule}
      email={allContactInfo.email}
    />
  </div>
);

};

export default ContactInfoContainer;