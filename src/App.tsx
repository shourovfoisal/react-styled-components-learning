// import './App.css'
import BaseButton, { AnimatedDiv, FancyButton, SubmitButton } from "./components/BaseButton/BaseButton"
import { DarkButton } from "./components/BaseButton/BaseButton.styles"
import * as S from "./components/BaseSample/BaseSample"


function App() {

  return (
    <>
      <div className="App-logo">

      </div>

      {/* <button>Button</button> */}
      <BaseButton type="submit">Styled Button</BaseButton>

      <div>
        <br />
      </div>

      <BaseButton variant='outline'>Outline Button</BaseButton>

      <div>
        <br />
      </div>

      <FancyButton as="a">Fancy Button</FancyButton>

      <div>
        <br />
      </div>

      <SubmitButton>Submit Button</SubmitButton>

      <div>
        <br />
      </div>

      <AnimatedDiv />

      <div>
        <br />
      </div>

      <DarkButton>Dark Button</DarkButton>

      <div>
        <br />
      </div>

      <S.Hello></S.Hello>
      <S.Hi></S.Hi>
    </>
  )
}

export default App
