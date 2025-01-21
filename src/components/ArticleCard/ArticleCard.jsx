import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FaHeart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  addToFavorites,
  removeFromFavoritesById,
} from "../../redux/favoritesSlice";

export function ArticleCard({ webTitle, id, fields }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.list);
  const isAddedToFavorite = favorites.some((article) => article.id === id);

  function handleOpenArticle(e) {
    e.preventDefault();

    navigate(`/article/${encodeURIComponent(id)}`);
  }

  function handleAddToFavorites(e) {
    e.stopPropagation();

    if (isAddedToFavorite) {
      dispatch(removeFromFavoritesById(id));
    } else {
      dispatch(addToFavorites({ webTitle, id, fields }));
    }
  }

  return (
    <Card
      className="w-100 h-100 clickable hover-shadow position-relative"
      onClick={handleOpenArticle}
    >
      <Card.Img variant="top" src={fields.thumbnail} />
      <Card.Body>
        <Card.Title>{webTitle}</Card.Title>
        <Card.Text>{fields.trailText}</Card.Text>
      </Card.Body>
      <FaHeart
        className={`position-absolute fs-1 top-right-25 ${
          isAddedToFavorite ? "text-danger" : "text-white"
        } clickable`}
        onClick={handleAddToFavorites}
      />
    </Card>
  );
}
