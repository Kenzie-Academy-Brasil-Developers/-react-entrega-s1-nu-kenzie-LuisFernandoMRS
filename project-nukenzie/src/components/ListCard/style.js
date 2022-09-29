import styled, { css } from "styled-components";

export const StyledDecoretionCard = styled.span`
  width: 5px;
  height: 100%;
  border-radius: 4px 0px 0px 4px;
  ${({ type }) => {
    if (type === "entrada") {
      return css`
        background-color: var(--color-secondary);
      `;
    } else {
      return css`
        background-color: var(--grey-3);
      `;
    }
  }}
`;
