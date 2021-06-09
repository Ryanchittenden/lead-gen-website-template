import React from "react";
import { css } from "@emotion/react";
export default function HomeHero(props) {
  return (
    <section>
      <div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          `}
        >
          <h1>{props.heading ? props.heading : "XYZ Business"}</h1>
          <hr
            css={css`
              border: 2px solid orange;
              width: 2rem;
            `}
          />
          <p>{props.tagline ? props.tagline : "Lorem ipsum"}</p>
        </div>
      </div>
    </section>
  );
}
