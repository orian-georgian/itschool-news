import { Card, Placeholder } from "react-bootstrap";

import placeholderImg from "../../assets/images/placeholder.png";

export function CardPlaceholder() {
  return (
    <Card className="w-100 h-100 clickable">
      <Card.Img variant="top" src={placeholderImg} />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
}
