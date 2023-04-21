import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { StyledModal, StyledOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.onEscapeClick);
  // }
  useEffect(() => window.addEventListener('keydown', onEscapeClick));

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onEscapeClick);
  // }
  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  });

  /**
   * Own methods
   */
  const onEscapeClick = ev => {
    if (ev.code === 'Escape') {
      onClose();
    }
  };
  const onOverlayClick = ev => {
    if (ev.target === ev.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <StyledOverlay onClick={onOverlayClick} id="backdrop">
      <StyledModal>{children}</StyledModal>
    </StyledOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

/**
 * Class method
 */
// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';
// import styled from 'styled-components';

// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onEscapeClick);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEscapeClick);
//   }

//   onEscapeClick = ev => {
//     if (ev.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   onOverlayClick = ev => {
//     if (ev.target === ev.currentTarget) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return createPortal(
//       <StyledOverlay onClick={this.onOverlayClick} id="backdrop">
//         <StyledModal>{this.props.children}</StyledModal>
//       </StyledOverlay>,
//       modalRoot
//     );
//   }
// }

// Modal.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.element),
//     PropTypes.element,
//   ]),
// };
// const StyledOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;
// `;
// const StyledModal = styled.div`
//   max-width: calc(100vw - 48px);
//   max-height: calc(100vh - 24px);
// `;
