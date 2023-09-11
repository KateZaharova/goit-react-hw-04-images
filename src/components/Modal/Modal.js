import { Overlay, ModalWrapper } from "./Modal.styled";
import React from 'react';
//import ReactDOM from 'react-dom';
//import Modal from 'react-modal';



export const Modal = ({largeImageURL, onClickBigImage, onKeyPress}) => {
  return (
    <Overlay className="overlay" onClick={(evt)=>{onClickBigImage(evt)}} onKeyDown={(evt)=>{onKeyPress(evt)}}>
  <ModalWrapper className="modal">
    <img src={largeImageURL} alt='' />
  </ModalWrapper>
</Overlay>
  )
}