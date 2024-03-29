import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #64c5ff;
  opacity: 0.5;
  &:hover {
    opacity: 1; // <Thing> when hovered
  }
`;
