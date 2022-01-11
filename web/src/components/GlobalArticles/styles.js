import styled from "styled-components";

export const Title = styled.h1`
  overflow: auto;
  text-align: center;
  margin: 0 auto 80px;
  position: relative;
  line-height: 60px;
  color: #333;
  margin-top: 70px;
  ::after {
    content: "";
    background: #ff523b;
    width: 80px;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ArticlesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;
