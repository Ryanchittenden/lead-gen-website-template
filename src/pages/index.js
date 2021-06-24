import React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/index/hero";
import SignupForm from "../components/index/form";
import { FormspreeProvider } from "@formspree/react";

// markup
const IndexPage = ({ Component, pageProps }) => {
  return (
    <Layout>
      <HomeHero heading={""} tagline={""} />
      <FormspreeProvider project="{your-project-id}">
        <SignupForm />
      </FormspreeProvider>
      <p>This is the homepage.</p>
    </Layout>
  );
};

export default IndexPage;
