import styled from 'styled-components';

export const Li = styled.li`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  border: 0.5px solid black;
  border-radius: 6px;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: 500;
  -webkit-box-shadow: 10px 7px 11px -7px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 10px 7px 11px -7px rgba(0, 0, 0, 0.66);
  box-shadow: 10px 7px 11px -7px rgba(0, 0, 0, 0.66);

  &:hover {
    background-color: #2986cc;
    color: #ffffff;
    cursor: pointer;
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const P = styled.p`
  width: 33%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
`;
