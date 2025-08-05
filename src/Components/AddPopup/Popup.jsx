import React from 'react'
import Modal from 'react-modal';
import AddForm from '../FormAddBlog/AddForm';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"black"
  },
};
function Popup({ isOpen ,setIsOpen ,close}) {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={close}
                style={customStyles}
                contentLabel="Add new Blog"
            >
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <div>I am a modal</div> */}
                <AddForm setIsOpen={setIsOpen} />
            </Modal>
        </div>
    )
}

export default Popup
