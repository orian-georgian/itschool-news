import { Stack, Image, Container } from "react-bootstrap";

import styles from "./Poster.module.css";
import { Search } from "../../components";

export function Poster({ image, title, text }) {
  return (
    <Container className={styles.outerContainer} fluid>
      <Container>
        <Stack className="pt-5" direction="horizontal">
          <Image className={styles.posterImage} fluid src={image} alt={title} />
          <Stack className={`mb-5 ${styles.textSection}`}>
            <h1>{title}</h1>
            <p>{text}</p>
            <Search />
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}
