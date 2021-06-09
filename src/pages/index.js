import React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/index/index.hero";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <HomeHero heading={""} tagline={""} />
      <p>This is the homepage.</p>
    </Layout>
  );
};

export default IndexPage;
