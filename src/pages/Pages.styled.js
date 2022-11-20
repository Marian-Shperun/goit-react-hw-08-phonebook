import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ImgFon = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  opacity: ${prop => (prop.isLoggedIn ? 0.2 : 1)};
  z-index: -1;
`;
export const Sticky = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  text-align: ${prop => (prop.scroll >= 100 ? 'center' : 'none')};
  padding-bottom: ${prop => (prop.scroll >= 100 ? '5px' : '20px')};
  margin-bottom: 0;
  backdrop-filter: ${prop => (prop.scroll >= 100 ? 'blur(15px)' : 'none')};
  z-index: 5;
`;
export const BtnAddsContact = styled(NavLink)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgb(186 224 189 / 52%);
  padding: 10px;
  border-radius: 50%;
  transition: all 250ms linear;

  &:hover,
  &:active {
    transform: scale(1.3);
    background-color: rgba(17, 246, 36, 0.52);
  }

  & span {
    color: green;
  }
`;
