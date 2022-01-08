import { TextHeaderContainer, HeaderText, Line } from "./styles";

const TextContainer = ({ title, variant }) => {
  return (
    <>
      <TextHeaderContainer>
        <HeaderText variant={variant}>
          {title}
          <Line />
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante
            blandit hendrerit. Aenean sit amet nisi.Interagi no mé, cursus quis, vehicula ac
            nisi.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Nullam volutpat risus
            nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
          </p>
        </HeaderText>
      </TextHeaderContainer>
    </>
  );
};

export default TextContainer;
