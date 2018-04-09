import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Title from "../../components/title";
import FileUpload from "../../components/file-upload";

const Main = styled.div`
  margin: 0 auto;
  max-width: 1068px;
  padding: 10px;
  font-size: 16px;
`;

const Section = styled.div`
  margin: 5px 0 20px;
`;

const files = null;

const Home = () => (
  <Main>
    <Title>Recent uploads</Title>
    {files && files.length > 4 && <Link to="/library">See all</Link>}
    {!files && (
      <Section>
        No recent uploads{" "}
        <span role="img" aria-label="confused">
          😕
        </span>
      </Section>
    )}
    <FileUpload />
  </Main>
);

export default Home;
