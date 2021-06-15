import React from "react";
import { css } from "@emotion/react";

const hrStyling = css`
  /* background: url("/2669.jpg") center center/cover no-repeat;*/
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center-left;
  box-shadow: insert 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  /* justify-content: center; */
  padding: 5em;
`;

export default function HomeHero(props) {
  return (
    <section>
      <div css={hrStyling}>
        <h1>{props.heading ? props.heading : "XYZ Business"}</h1>
        <p>{props.tagline ? props.tagline : "Lorem ipsum"}</p>
      </div>
    </section>
  );
}
