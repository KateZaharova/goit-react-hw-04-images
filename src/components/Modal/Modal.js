import { Overlay, ModalWrapper } from "./Modal.styled";
import React from 'react';
import { useEffect } from "react";
//import ReactDOM from 'react-dom';
//import Modal from 'react-modal';



export const Modal = ({largeImageURL, onClickBigImage, onKeyPress}) => {
 
 /* useEffect(() => {
    if (largeImageURL.length > 0) {
      window.addEventListener('keydown', onKeyPress);
    } else window.removeEventListener('keydown', onKeyPress);
  }, [largeImageURL, onKeyPress]);
 */
  
useEffect(() => {
     window.addEventListener('keydown', onKeyPress);
  return () => {
    window.removeEventListener('keydown', onKeyPress);
  };
  }, [onKeyPress]);



  return (
    <Overlay className="overlay"
      onClick={(evt) => { onClickBigImage(evt) }}
     onKeyDown={(evt) => { onKeyPress(evt) }}
    >
  <ModalWrapper className="modal">
    <img src={largeImageURL} alt='' />
  </ModalWrapper>
</Overlay>
  )
}