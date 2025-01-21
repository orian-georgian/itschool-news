import { Container, Row, Stack, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  ArticleCard,
  CardPlaceholder,
  Pagination,
  Poster,
} from "../components";

import newsGirl from "../assets/images/news-girl.png";

import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { getArticlesUrl } from "../api/articles";

export function LandingPage() {
  const query = useSelector((state) => state.search.query);
  const { page, pageSize, goPrevPage, goToNextPage, goToPage, changePageSize } =
    usePagination();
  const url = getArticlesUrl({ page, pageSize, query });
  const { data, loading } = useFetch(url);

  const articles = data?.response?.results;
  const totalPages = data?.response?.pages;

  return (
    <Stack>
      <Poster
        image={newsGirl}
        title="Stay Informed. Stay Ahead."
        text="Welcome to ItSchool News, your go-to destination for breaking news, in-depth analysis, and real-time updates from around the globe. From politics to entertainment, business to technology, we deliver stories that matter most to you. Discover trusted reporting, expert opinions, and fresh perspectives—all in one place. Stay connected. Stay empowered. Explore now!"
      />
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
