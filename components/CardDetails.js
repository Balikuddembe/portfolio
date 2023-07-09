const CardDetails = ({ match }) => {
    const { params } = match;
    const selectedCard = portfolioItems.find(item => item.title.toLowerCase().replace(/ /g, '-') === params.id);
  
    if (!selectedCard) {
      return <div>Card not found</div>;
    }
  
    const { image, title, content, demoLink, sourceCodeLink } = selectedCard;
  
    return (
      <div>
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