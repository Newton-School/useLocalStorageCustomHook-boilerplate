import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onClick={onClose}
    >
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        position: 'relative'
      }}
      onClick={(e) => e.stopPropagation()} // This prevents the modal from closing when clicking inside
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
