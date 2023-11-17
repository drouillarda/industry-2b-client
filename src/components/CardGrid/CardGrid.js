import "./CardGrid.scss";
import { Card } from "../Card/Card";

export const CardGrid = ({ heading, records, titleField, imageField, handleAddButton, titleList }) => (
  <section className="grid">
    <h2 className="grid__heading">{heading}</h2>
    <div className={`grid__grid ${records.length === 1 ? "grid__grid--single" : ""}`}>
      {records.map(record =>
        <Card
          key={record.id}
          title={record[titleField]}
          backgroundUrl={record[imageField]}
          handleAddButton={() => handleAddButton(record)}
          inList={titleList.map(entry => entry.id).includes(record.id)}
        />)}
    </div>
  </section>
);
