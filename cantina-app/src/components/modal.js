import React from 'react';

function Modal({ closeModal }) {
    return <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='title'></div>
            <div className='pCards'></div>
            <div className='Collect'>
                <button onClick={() => closeModal(false)}>add</button>
            </div>
        </div>
    </div>
}

export default Modal