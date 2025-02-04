import { useState } from "react";

import { Stack, Container, Row, Col, Button } from "react-bootstrap";

import styles from "./Carousel.module.css";

const listOfImages = [
  {
    id: "453246372432",
    url: "hjfdshjd",
    caption: "First image",
    color: "#ff0000",
  },
  {
    id: "334452353243",
    url: "hjfdshjd",
    caption: "Second image",
    color: "#ffff00",
  },
  {
    id: "45323472432",
    url: "hjfdshjd",
    caption: "Third image",
    color: "#ff00ff",
  },
  {
    id: "768246372432",
    url: "hjfdshjd",
    caption: "Forth image",
    color: "#0000ff",
  },
  {
    id: "453246335435",
    url: "hjfdshjd",
    caption: "Fifth image",
    color: "#7882ff",
  },
];

function Carousel() {
  const [images, setImages] = useState(listOfImages);

  function handleGoPrevious() {
    setImages((prevState) => {
      const lastImage = prevState.find(
        (_, index) => index === prevState.length - 1
      );

      const listWithoutLastImage = prevState.filter(
        (_, index) => index < prevState.length - 1
      );

      return [lastImage, ...listWithoutLastImage];
    });
  }

  function handleGoNext() {
    setImages((prevState) => {
      const [firstImage, ...restOfImages] = prevState;

      return [...restOfImages, firstImage];
    });
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Stack className={styles.imagesContainer} direction="horizontal">
            {images.map((image, index) => (
              <div
                style={{ backgroundColor: image.color }}
                className={`${styles.image} ${
                  index === 0 ? styles.mainImage : ""
                }`}
                key={image.id}
              ></div>
            ))}
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="default" onClick={handleGoPrevious}>
            Previous
          </Button>
          <Button variant="default" onClick={handleGoNext}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Carousel;
