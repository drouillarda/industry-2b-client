import "./Card.scss";

export const Card = ({ title, backgroundUrl, description,  }) => (
  <article className="card" style={{ "--bg-image": `url("${backgroundUrl}")` }}>
    <h2 className="card__subheading">{title}</h2>
    <p className="card__description">{description}</p>
  </article>
);
