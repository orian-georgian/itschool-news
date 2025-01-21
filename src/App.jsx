import { HashRouter, Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Article, Favorites, LandingPage, SectionPage } from "./pages";
import { Header, Footer } from "./components";
import { Provider } from "react-redux";

import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Container fluid className="p-0">
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <LandingPage />
                </>
              }
            />
            <Route
              path="/section/:section"
              element={
                <>
                  <Header />
                  <SectionPage />
                </>
              }
            />
            <Route
              path="/article/:articleId"
              element={
                <>
                  <Header />
                  <Article />
                </>
              }
            />

            <Route
              path="/favorites"
              element={
                <>
                  <Header />
                  <Favorites />
                </>
              }
            />
          </Routes>
        </HashRouter>
        <Footer />
      </Container>
    </Provider>
  );
}

export default App;
