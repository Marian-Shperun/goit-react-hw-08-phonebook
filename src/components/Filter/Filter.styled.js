import styled from 'styled-components';

export const IconFilter = styled.span`
  position: absolute;
  top: 10px;
  left: ${prop => (prop.scroll >= 100 ? '-1500px' : '5px')}; ;
`;

