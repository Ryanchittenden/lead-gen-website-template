import React from "react";
import { css } from "@emotion/react";
import { centre_content, fontMarginReset } from "../helpers";

const hrStyling = css`
  border: 2px solid orange;
  width: 2rem;
  ${fontMarginReset}
`;

const innerStyling = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${centre_content.md}
`;

export default function HomeHero(props) {
  return (
    <section>
      <div css={innerStyling}>
        <h1>{props.heading ? props.heading : "XYZ Business"}</h1>
        <hr css={hrStyling} />
        <p>{props.tagline ? props.tagline : "Lorem ipsum"}</p>
      </div>
    </section>
  );
}
