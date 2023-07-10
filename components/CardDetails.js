import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = ({ match }) => {
    const { id } = useParams();

    const selectedCard = portfolioItems.find(
        item => item.title.toLowerCase().replace(/ /g, '-') === id
      );
      
  
    if (!selectedCard) {
      return <div>Card not found</div>;
    }
  
    const { image, title, content, demoLink, sourceCodeLink } = selectedCard;
  
    return (
      <div id="carddetails">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
          <a href={demoLink}>Live Demo</a>
          <a href={sourceCodeLink}>Source Code</a>
        </div>
      </div>
    );
  };
   export default CardDetails;