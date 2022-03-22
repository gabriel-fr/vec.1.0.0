import styled from "styled-components";

export const SmallContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
`;

export const TrasparentContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const TextContainer = styled.div`
  color: #fff;
  padding: 40px 25px 40px 25px;
  text-align: right;
`;

export const AboutButtons = styled.div`
  text-align: right;
  padding-right: 25%;
  padding-left: 25%;
`;

export const AboutLinks = styled.ul`
  list-style-type: none;
  padding-bottom: 14px;

  a {
    text-decoration: none;
  }

  li {
    color: #fff;
    padding-right: 25px;
    padding-bottom: 7px;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;
