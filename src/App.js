import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/header";
import Home from "./app/home";
import Library from "./app/library";

const Main = styled.div`
  margin: 0 auto;
`;

const HomeLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const App = () => (
  <Main>
    <Router>
      <div>
        <Header>
          <HomeLink to="/">PWA IMAGE UPLOAD</HomeLink>
        </Header>
        <Route exact path="/" component={Home} />
        <Route exact path="/library" component={Library} />
      </div>
    </Router>
  </Main>
);

export default App;
