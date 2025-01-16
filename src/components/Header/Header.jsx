import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import styles from "./Header.module.css";

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

  function onRouteChange(route) {
    navigate(`/section/${route}`);
  }

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand className="me-5" href="#home">
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
      </Container>
    </Navbar>
  );
}
