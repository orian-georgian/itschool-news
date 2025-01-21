import { Stack, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

import sportImg from "../assets/images/sport.webp";
import weatherImg from "../assets/images/weatherImg.png";
import politicsImg from "../assets/images/politicsImg.png";

import {
  Poster,
  ArticleCard,
  Pagination,
  CardPlaceholder,
} from "../components";

import { usePagination } from "../hooks/usePagination";
import { getArticlesUrl } from "../api/articles";

export function SectionPage() {
  const { section } = useParams();
  const query = useSelector((state) => state.search.query);
  const { page, pageSize, goPrevPage, goToNextPage, goToPage, changePageSize } =
    usePagination(query);
  const url = getArticlesUrl({ page, pageSize, query, section });
  const { data, loading } = useFetch(url);

  const articles = data?.response?.results;
  const totalPages = data?.response?.pages;

  console.log("loading", loading);

  return (
    <Stack>
      {section === "sport" && (
        <Poster
          image={sportImg}
          title="Feel the Action. Live the Game."
          text="Experience the pulse of sports with ItSchool News. Get real-time scores, match highlights, and in-depth analysis across your favorite leagues and teams. From thrilling victories to behind-the-scenes stories, we cover it all. Stay ahead with updates tailored for true sports enthusiasts. Your game. Your news. Stay connected!"
        />
      )}
      {section === "weather" && (
        <Poster
          image={weatherImg}
          title="Plan Your Day. Stay Prepared."
          text="Never get caught off guard with ItSchool News. Access hyper-local and global weather forecasts, storm warnings, and climate updates in real time. From sunny skies to sudden downpours, we've got you covered with accurate and reliable insights to plan your day effortlessly. Stay ahead of the weather. Stay informed."
        />
      )}
      {section === "politics" && (
        <Poster
          image={politicsImg}
          title="Understand the World. Shape Your Perspective."
          text="Dive into the heart of political developments with ItSchool News. From breaking headlines to detailed analysis of policies and elections, we provide the insights you need to stay informed. Get unbiased reporting, expert opinions, and global perspectives to better understand the decisions shaping our world. Stay informed. Stay involved."
        />
      )}

      <Container className="py-5" fluid>
        <Container>
          {loading ? (
            <Row>
              <Col className="p-3" xs={12} md={6} lg={4}>
                <CardPlaceholder />
              </Col>
              <Col className="p-3" xs={12} md={6} lg={4}>
                <CardPlaceholder />
              </Col>
              <Col className="p-3" xs={12} md={6} lg={4}>
                <CardPlaceholder />
              </Col>
            </Row>
          ) : (
            <Row>
              {articles?.map((article) => (
                <Col className="p-3" xs={12} md={6} lg={4} key={article.id}>
                  <ArticleCard {...article} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </Container>

      <Pagination
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
        onNext={goToNextPage}
        onPrevious={goPrevPage}
        onPage={goToPage}
        onPageSizeChange={changePageSize}
      />
    </Stack>
  );
}
