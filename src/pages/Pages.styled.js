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
export const TextWelcome = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  z-index: -1;
`;
// export const Sticky = styled.div`
//   position: -webkit-sticky;
//   position: sticky;
//   top: 0;
//   text-align: ${prop => (prop.scroll >= 100 ? 'center' : 'none')};
//   padding-bottom: ${prop => (prop.scroll >= 100 ? '5px' : '20px')};
//   margin-bottom: 0;
//   backdrop-filter: ${prop => (prop.scroll >= 100 ? 'blur(15px)' : 'none')};
//   z-index: 5;
// `;
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
  & .btn-text {
    display: none;
    margin-left: 10px;
    @media screen and (max-width: 769px) {
      display: block;
      &:hover,
      &:active {
        padding-left: 50px;
      }
    }
  }
  & span {
    color: green;
  }
  @media screen and (max-width: 769px) {
    bottom: 0;
    right: 0;
    left: 0;
    align-items: center;
    backdrop-filter: blur(14px);
    border-radius: 0;
    z-index: 5;
  }
`;
export const TotalCounts = styled(NavLink)`
  display: block;
  text-align: center;
  @media screen and (max-width: 769px) {
    padding-bottom: 55px;
  }
`;
