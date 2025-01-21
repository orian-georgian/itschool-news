import { Navbar, Nav, Container, Image, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { FaHeart } from "react-icons/fa";

import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const urls = [
  {
    label: "Sports",
    value: "sport",
  },
  {
    label: "Weather",
    value: "weather",
  },
  {
    label: "Politics",
    value: "politics",
  },
];

export function Header() {
  const navigate = useNavigate();
  const { section } = useParams();
  const favorites = useSelector((state) => state.favorites.list);

  function onRouteChange(route) {
    navigate(`/section/${route}`);
  }

  function handleGoToFavorites(e) {
    e.preventDefault();

    navigate("/favorites");
  }

  function handleGoHome() {
    navigate("/");
  }

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand className="me-5 clickable" onClick={handleGoHome}>
          <Image className="mh-50" fluid src={logo} alt="News logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {urls.map(({ value, label }) => (
              <Nav.Link
                key={value}
                className={`${styles.navLink} px-4 ${
                  section === value ? styles.activeLink : undefined
                }`}
                onClick={() => onRouteChange(value)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Stack
          className="position-relative ms-auto me-3 align-items-center justify-content-center clickable"
          onClick={handleGoToFavorites}
        >
          <FaHeart className="fs-2 text-white ms-auto" />
          <span className="position-absolute top-right-5 translate-middle badge rounded-circle bg-danger p-2">
            {favorites.length}
          </span>
        </Stack>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}
