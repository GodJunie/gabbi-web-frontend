import styled from "styled-components";

export const UbuntuRegular = styled.div<{
  textAlign?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  textDecoration?: string;
}>`
  font-family: "Ubuntu";
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration}`};
`;

export const PlasterRegular = styled.div<{
  textAlign?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  textDecoration?: string;
}>`
  font-family: Plaster;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration}`};
`;

export const VibesRegular = styled.div<{
  textAlign?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  textDecoration?: string;
}>`
  font-family: Vibes;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration}`};
`;

export const IndieFlowerRegular = styled.div<{
  textAlign?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  textDecoration?: string;
}>`
  font-family: IndieFlower;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration}`};
`;
