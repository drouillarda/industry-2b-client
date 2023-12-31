import "./Card.scss";
import addIcon from "../../assets/images/add-to-cart.svg";
import removeIcon from "../../assets/images/remove-from-cart.svg";
import { useEffect, useState, useRef } from "react";

export const Card = ({ title, backgroundUrl, description, handleAddButton, bigText, inList }) => {
  const [noAnimate, setNoAnimate] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    setTimeout(() => setNoAnimate(true), 500);
  }, []);

  return (
    <article
      className={
        `card ${bigText ? "card--big" : ""} ${inList ? "card--in-list" : ""} ${noAnimate ? "card--no-animate" : ""}`
      }
      style={backgroundUrl && { "--bg-image": `url("${backgroundUrl}")` }}
      onClick={handleAddButton}
    >
      <button type="button" className="card__add-button">
        <img src={inList ? removeIcon : addIcon} alt="A plus sign, representing adding to your list." />
      </button>
      <h3 className="card__subheading">{title}</h3>
      {description && <p className="card__description">{description}</p>}
      <video
        autoPlay="autoplay"
        loop="loop"
        src={`${process.env.REACT_APP_BACKEND_URL}/videos/sample-video.mp4`}
        className="card__video"
        ref={video} />
    </article>
  );
};
