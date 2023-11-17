import "./Card.scss";
import addIcon from "../../assets/images/add-to-cart.svg";

export const Card = ({ title, backgroundUrl, description, handleAddButton, bigText, inList }) => (
  <article
    className={`card ${bigText ? "card--big" : ""} ${inList ? "card--in-list" : ""}`}
    style={backgroundUrl && { "--bg-image": `url("${backgroundUrl}")` }}
    onClick={handleAddButton}
  >
    <button type="button" className="card__add-button">
      <img src={addIcon} alt="A plus sign, representing adding to your list." />
    </button>
    <h3 className="card__subheading">{title}</h3>
    {description && <p className="card__description">{description}</p>}
  </article>
);
