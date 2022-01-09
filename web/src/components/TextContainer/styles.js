import styled from "styled-components";

export const TextHeaderContainer = styled.div`
  height: ${({ height }) => (height ? height : "")};
  display: block;
  background-color: ${({ variant }) => (variant === "red" ? "#ff523b" : "white")};
  color: ${({ variant }) => (variant === "red" ? "ghostwhite" : "red")};
  margin-top: 70px;
  padding-bottom: 70px;
  padding: 28px;
  border-radius: 25px;
  padding-bottom: 50px;
  filter: drop-shadow(3px 3px 5px #000000);
  margin-right: 20px;
`;

export const HeaderText = styled.div`
  font-size: 28px;
  text-align: right;
  filter: drop-shadow(3px 3px 5px #000000);
`;

export const Line = styled.hr`
  margin-left: 60%;
  width: 40%;
`;
