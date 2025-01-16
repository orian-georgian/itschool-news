import { Card } from "react-bootstrap";

export function ArticleCard({
  webPublicationDate,
  webTitle,
  sectionId,
  sectionName,
  fields,
}) {
  return (
    <Card className="w-100 h-100">
      <Card.Img variant="top" src={fields.thumbnail} />
      <Card.Body>
        <Card.Title>{webTitle}</Card.Title>
        <Card.Text>{fields.trailText}</Card.Text>
      </Card.Body>
    </Card>
  );
}
