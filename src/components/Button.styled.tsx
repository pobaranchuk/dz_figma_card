import styled, {css} from "styled-components";

type ButtonStyledPropsType = {
    buttonType: "primary" | "secondary"
}

export const ButtonStyled = styled.button<ButtonStyledPropsType>`
  border-radius: 5px;
  width: 86px;
  height: 30px;
  border: 2px solid #4E71FE;
  margin-left: 20px;
  margin-bottom: 22px;
  float: left;
  
  ${props => props.buttonType === "primary" && css<ButtonStyledPropsType>`
    background-color: transparent;
    color: #4E71FE;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
  
  `} 
  ${props => props.buttonType === "secondary" && css<ButtonStyledPropsType>`
    background-color: #4E71FE;
    color: #FFFFFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
  
  `}
`