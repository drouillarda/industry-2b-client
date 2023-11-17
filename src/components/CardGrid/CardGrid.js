import "./CardGrid.scss";
import { Card } from "../Card/Card";

export const CardGrid = ({ heading, records, titleField, imageField }) => (
  <section className="grid">
    <h2 className="grid__heading">{heading}</h2>
    <div className="grid__grid">
      {records.map(record =>
        <Card
          key={record.id}
          title={record[titleField]}
          backgroundUrl={record[imageField]}
          handleAddButton={() => {}}
        />)}
    </div>
  </section>
);
