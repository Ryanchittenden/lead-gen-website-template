import React from "react";
import Layout from "../components/layout";
import Home_Hero from "../components/index/hero";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Home_Hero heading={""} tagline={""} />
      <p>This is the homepage.</p>
    </Layout>
  );
};

export default IndexPage;
