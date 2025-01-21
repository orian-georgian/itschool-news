import { Container, Row, Col, Image, Spinner } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { getArticleByIdUrl } from "../api/articles";
import { useFetch } from "../hooks/useFetch";

import DOMPurify from "dompurify";

export function Article() {
  const { articleId } = useParams();
  const url = getArticleByIdUrl({ articleId });

  const { data, isLoading } = useFetch(url);
  const article = data?.response?.content?.fields ?? null;

  const cleanBody = article ? DOMPurify.sanitize(article.body) : null;

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (!article) {
    return null;
  }

  console.log("articleId", data);
  return (
    <Container className="py-5" fluid>
      <Container>
        <Row className="justify-content-center">
          <Col md={{ span: 8 }}>
            <Image
              className="w-100"
              fluid
              src={article.thumbnail}
              alt={article.headline}
            />
            <h1 className="h1 my-4">{article.headline}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={{ span: 8 }}>
            <div dangerouslySetInnerHTML={{ __html: cleanBody }} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
