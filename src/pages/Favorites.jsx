import { Stack, Container, Col, Row } from "react-bootstrap";

import { Poster, ArticleCard } from "../components";
import { useSelector } from "react-redux";

import favoritesImg from "../assets/images/favorites.png";

export function Favorites() {
  const favorites = useSelector((state) => state.favorites.list);

  return (
    <Stack>
      <Poster
        hideSearch
        image={favoritesImg}
        title="Your Favorites. Your Stories."
        text="Welcome to your personalized corner of ItSchool News, where the stories you care about most come together. From saved articles to topics that inspire you, this is your curated space for convenience and insight. Revisit breaking news, expert opinions, and exclusive features, all handpicked by you. Stay inspired. Stay connected. Dive into your favorites now!"
      />
      <Container className="py-5" fluid>
        <Container>
          <Row>
            {favorites?.map((article) => (
              <Col className="p-3" xs={12} md={6} lg={4} key={article.id}>
                <ArticleCard {...article} />
              </Col>
            ))}
            {!favorites.length && (
              <h1 className="h1 text-center my-5">Nothing here...</h1>
            )}
          </Row>
        </Container>
      </Container>
    </Stack>
  );
}
