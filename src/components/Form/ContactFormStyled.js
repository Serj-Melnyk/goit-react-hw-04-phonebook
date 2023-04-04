import styled from 'styled-components';
import {
  Form as FormFormik,
  ErrorMessage as ErrorFormic,
  Field as FormField,
} from 'formik';

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
  width: 100%;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
`;

export const Field = styled(FormField)`
  width: 200px;
`;

export const Form = styled(FormFormik)`
  position: relative;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 500px;
  height: fit-content;
  border: 1px solid black;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 6px;
`;

export const ErrorMessage = styled(ErrorFormic)`
  color: red;
  display: contents;
`;

export const Button = styled.button`
  margin-bottom: 10px;
  width: 150px;
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
