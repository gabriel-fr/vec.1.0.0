import { TextHeaderContainer, HeaderText, Line } from "./styles";

const TextContainer = ({ title, variant, height, text }) => {
  return (
    <>
      <TextHeaderContainer variant={variant} height={height}>
        <HeaderText>{title}</HeaderText>
        <Line />
        <p>
          {text
            ? text
            : "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante" +
              "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante" +
              "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante" +
              "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante" +
              "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante" +
              "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante"}
        </p>
      </TextHeaderContainer>
    </>
  );
};

export default TextContainer;
