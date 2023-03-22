import styled, { css } from 'styled-components'


const INPUTSTYLE = {
  line: css`
    :focus{
      outline: none;
    }
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom-width:1;
  `,
  box: css`
    background-color: white;
    :focus{
      outline: none;
    }
    border: 1px solid black;
    border-radius:5px;
    padding: 5px;
    
  `,
  commentBox: css`
    width: 80%;
    height: 50px;
    border: 1px solid #505050;
    border-radius: 5px;
    background-color: #fff;
    margin: 15px 0;
    resize: none;
  `,
}
//input
export const Input = ({ inputtype, ...rest }) => {
  const InputStyle = INPUTSTYLE[inputtype]
  return (
    <StyledInput InputStyle={InputStyle} {...rest} required/>
  )
}
//textarea
export const Textarea = ({inputtype, onChange, value}) => {
  const textareaStyle = INPUTSTYLE[inputtype];
  return (
    <StyledTextarea InputStyle={textareaStyle} onChange={onChange} value={value}/>
  )
}

const StyledInput = styled.input`
  background-color: #F5F5F5;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  ${(props) => (props.InputStyle)}
`;

const StyledTextarea = styled.textarea`
  ${(props) => (props.InputStyle)}
`;