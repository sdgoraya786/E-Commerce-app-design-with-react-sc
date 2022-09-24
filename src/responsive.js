import { css } from "styled-components";

export const MediumMobile = (props) => {
  return css`
    @media only screen and (max-width: 375px) {
      ${props}
    }
  `;
};
