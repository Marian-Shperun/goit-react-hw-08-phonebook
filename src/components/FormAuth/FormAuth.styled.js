import styled from 'styled-components';

export const FormAuthent = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 25px;

  background-color: #ffffff61;
  backdrop-filter: blur(4px);
  border: none;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
`;

export const BlockBtns = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-end;
  gap: 15px;
`;

export const IconFormAuth = styled.span`
  position: relative;
  top: -30px;
  left: 5px;
  width: 20px;
`;
