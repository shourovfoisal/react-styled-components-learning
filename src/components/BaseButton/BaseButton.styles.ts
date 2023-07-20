import styled, { keyframes } from "styled-components"

export const Button = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props: any) => 
    (props.variant === 'outline' ? '#fff' : '#4caf50')};
  color: ${(props: any) => 
    (props.variant === 'outline' ? '#4caf50' : '#fff')};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) => 
        (props.variant !== 'outline' ? '#fff' : '#4caf50')};
    color: ${(props: any) => 
        (props.variant !== 'outline' ? '#4caf50' : '#fff')};
  }
`

export const FancyButton = styled(Button)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`

export const SubmitButton = styled(Button).attrs((props) => {
    return {
        type: 'submit',
    }
})`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props: any) => 
            (props.variant !== 'outline' ? '#fff' : '#4caf50')};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`
export const AnimatedDiv = styled.div`
    animation: ${rotate} infinite 20s linear;
    border-radius: 10px;
    width: 100px;
    height: 100px;
    background-color: crimson;
`

export const DarkButton = styled(Button)`
    border: 2px solid ${(props) => (props.theme.dark.primary)};
    background-color: ${(props) => (props.theme.dark.primary)};
    color: ${(props) => (props.theme.dark.text)};
`

