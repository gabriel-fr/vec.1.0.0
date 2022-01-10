import styled from "styled-components";

export const UserArticleContainer = styled.div`
  width: 100%;
  display: inline-block;
  background-color: #333;
  height: 454px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
  width: 190px !important;
  margin-top: 34px;
  margin-bottom: 20px;
`;

export const UserDescription = styled.div`
  padding-right: 25%;
  padding-left: 25%;
  color: #fff;
  text-align: center;
`;

export const UserName = styled.div`
  color: #ff523b;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
`;

export const ProfileButtons = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 7px;
  transition: 0.3s;
`;
