import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Modal, ToolTip } from './components'

export const GlobalStyle = createGlobalStyle`
 body {
   margin: auto;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "Open Sans", sans-serif;
 }
`;

const App = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <GlobalStyle />

      <ToolTip label="This is a tooltip">
        <button type='button'>Hover Over Me</button>
      </ToolTip>



      <button type='button' onClick={() => setToggleModal(!toggleModal)}>Learn about Compound Components</button>

      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header>React Patterns | Compound Components</Modal.Header>
        <Modal.Body>
          "Compound components are a pattern in which components are used together such that they share an implicit state that 
          lets them communicate with each other in the background.In other words, when multiple components work together to have a shared
           state and handle logic together, they are called compound components." -LogRocket.com
        </Modal.Body>
      </Modal>

    </>
  )
}

export default App