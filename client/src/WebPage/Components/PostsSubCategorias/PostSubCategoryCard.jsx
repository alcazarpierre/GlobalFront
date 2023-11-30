import { Link } from "react-router-dom";
import "./PostSubCategoryCard.modules.css"

const PostSubCategoryCard = ({id, image, title, description, categories, projectcategory, location}) =>{

    const handleLoad = () => {
        window.scrollTo(0.0);
      }

    return (
        <div className="postSubCategory-Card">
          
            <div className="spaceA-postSubCategory-Card">
                
                <h3 className="subTitle-spaceA">{categories} de {projectcategory} en {location}</h3>

                <div className="image-postSubCategory-Card">
                    <img src={image} alt={title} />
                    <Link to="/colaborar" onClick={handleLoad}>
                        <button className="button-postSubCategory-Card">¡Quiero Contribuir!</button>
                    </Link>
                    
                </div>
                
            </div>

            <div className="spaceB-postSubCategory-Card">
                <h3 className="title-spaceB">{title}</h3>
                <p className="description-spaceB">{description}</p>
            </div>
          
        </div>
      );


};

export default PostSubCategoryCard;