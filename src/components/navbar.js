import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { breakpoints } from "./helpers";
import { RiMenu4Line } from "react-icons/ri";
import { StaticImage } from "gatsby-plugin-image";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 200ms max-height ease-in, 200ms visibility ease-in,
    opacity 200ms ease-in;

  ${(props) =>
    props.isVisible
      ? "max-height: 25vh; visibility: visible; opacity: 1"
      : "max-height: 0px; visibility: hidden; opacity: 0"};
  ${breakpoints.md} {
    flex-direction: row;
    max-height: 25vh;
    visibility: visible;
    opacity: 1;
  }
`;

const NavLink = styled(Link)`
  padding: 1rem;
  display: block;
`;

const menuIcon = css`
  width: 30px;
  height: 30px;
  ${breakpoints.md} {
    display: none;
  }
`;

const logoMenuWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${breakpoints.md} {
    margin-right: auto;
  } ;
`;

export default function Navbar(props) {
  const [isVisible, isVisibleChanger] = useState(false);
  return (
    <header
      css={css`
        padding: 1rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          ${breakpoints.md} {
            flex-direction: row;
          }
        `}
      >
        <div css={logoMenuWrapper}>
          <span
            css={css`
              margin-right: auto;
            `}
          >
            <StaticImage
              src="../images/icon.png"
              alt="Icon"
              width={200}
              height={200}
            />
          </span>
          <RiMenu4Line
            css={menuIcon}
            onClick={() => isVisibleChanger(!isVisible)}
          />
        </div>
        <Nav isVisible={isVisible}>
          <NavLink to="/"> Home Page</NavLink>
          <NavLink to="/contact">Contact Page</NavLink>
        </Nav>
      </div>
    </header>
  );
}
