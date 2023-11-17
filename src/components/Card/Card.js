import "./Card.scss";
import addIcon from "../../assets/images/add-to-cart.svg";

export const Card = ({ title, backgroundUrl, description, handleAddButton, bigText }) => (
  <article className={`card ${bigText ? "card--big" : ""}`} style={backgroundUrl && { "--bg-image": `url("${backgroundUrl}")` }}>
    <button type="button" className="card__add-button" onClick={handleAddButton}><img src={addIcon} alt="A plus sign, representing adding to your list." /></button>
    <h3 className="card__subheading">{title}</h3>
    {description && <p className="card__description">{description}</p>}
  </article>
);
