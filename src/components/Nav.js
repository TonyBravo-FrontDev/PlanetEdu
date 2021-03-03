import React from "react";
import styled from 'styled-components'

const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;

    nav {
        width: 90%;
        margin: auto;

        h1 {
            a {
                font-weight: 500;
                color: white;
                text-decoration: none;

                span {
                    color: #FF454F;
                }

                @media(max-width: 599px) {
                    font-size: 2rem
                }
            }
        }
    }
`

const Nav = () => {
  return (
    <StyledHeader className="head">
      <nav>
        <h1>
          <a href="!#">planet<span>edu</span></a>
        </h1>
      </nav>
    </StyledHeader>
  );
};

export default Nav;
