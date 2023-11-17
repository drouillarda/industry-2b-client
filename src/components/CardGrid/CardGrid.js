import "./CardGrid.scss";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";

export const CardGrid = ({ heading, records, titleField, imageField, handleAddButton, titleList }) => {
  const [quantityToShow, setQuantityToShow] = useState(1);

  useEffect(() => {
    const addToQuantityShowing = (duration) => {
      if (quantityToShow < records.length) {
        setTimeout(() => {
          setQuantityToShow(prev => prev + 1);
          addToQuantityShowing(duration * 0.95);
        }, Math.max(duration, 50));
      }
    }
    addToQuantityShowing(100);
  }, [records]);

  return (
    <section className="grid">
      <h2 className="grid__heading">{heading}</h2>
      <div className={`grid__grid ${records.length === 1 ? "grid__grid--single" : ""}`}>
        {records.map(record => <Card
          key={record.id}
          title={record[titleField]}
          backgroundUrl={record[imageField]}
          handleAddButton={() => handleAddButton(record)}
          inList={titleList.map(entry => entry.id).includes(record.id)} />).slice(0, quantityToShow)}
        {quantityToShow < records.length && [...Array(records.length - quantityToShow).keys()]
          .map(i => <div key={i} className="grid__placeholder"></div>)}
      </div>
    </section>
  );
};
