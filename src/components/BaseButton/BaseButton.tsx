import { Button, FancyButton, SubmitButton, AnimatedDiv } from "./BaseButton.styles";

const BaseButton = ({children, ...props}: any) => {
    return <Button {...props}>{children}</Button>
}

export default BaseButton
export { FancyButton, SubmitButton, AnimatedDiv }