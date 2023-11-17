import "./Card.scss";

export const Card = ({ title, backgroundUrl, description,  }) => (
  <article className="card" style={backgroundUrl && { "--bg-image": `url("${backgroundUrl}")` }}>
    <h3 className="card__subheading">{title}</h3>
    <p className="card__description">{description}</p>
  </article>
);
