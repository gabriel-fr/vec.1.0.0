import styled from "styled-components";

export const TextHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
  padding-bottom: 70px;
`;

export const HeaderText = styled.div`
  background-color: ${({ variant }) => (variant === "red" ? "#ff523b" : "white")};
  color: ${({ variant }) => (variant === "red" ? "ghostwhite" : "red")};
  text-align: right;
  flex-basis: 45%;
  padding: 28px;
  border-radius: 25px;
  padding-bottom: 50px;
  filter: drop-shadow(3px 3px 5px #000000);
`;

export const Line = styled.hr`
  margin-left: 60%;
  width: 40%;
`;
