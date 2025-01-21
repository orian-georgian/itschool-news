import { Row, Image, Container, Col, Stack } from "react-bootstrap";

import styles from "./Poster.module.css";
import { Search } from "../../components";

export function Poster({ image, title, text, hideSearch }) {
  return (
    <Container className={styles.outerContainer} fluid>
      <Container>
        <Row className="pt-5">
          <Col xs={12} sm={{ span: 4, offset: 2 }}>
            <Image
              className={styles.posterImage}
              fluid
              src={image}
              alt={title}
            />
          </Col>
          <Col xs={12} sm={6} md={5} className="mt-auto">
            <Stack
              className={`${!hideSearch ? "mb-5" : "mb-2"} ${
                styles.textSection
              }`}
            >
              <h1>{title}</h1>
              <p>{text}</p>
              {!hideSearch && <Search />}
            </Stack>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
