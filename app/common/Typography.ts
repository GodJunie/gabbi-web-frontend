import styled from 'styled-components';

export const IBM_Regular = styled.div<{
  textAlign?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  textDecoration?: string;
}>`
  font-family: 'IBMPlexSansKR';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) => props.textDecoration && `text-decoration: ${props.textDecoration}`};
`;

export const IBM_SemiBold = styled.div<{
  textAlign?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  textDecoration?: string;
}>`
  font-family: 'IBMPlexSansKR';
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) => props.textDecoration && `text-decoration: ${props.textDecoration}`};
`;

export const Swagger = styled.div<{
  textAlign?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  textDecoration?: string;
}>`
  font-family: 'Swagger';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) => props.textDecoration && `text-decoration: ${props.textDecoration}`};
`;
