"use client"
import React from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, message }) => {
    if (!show) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
        <div style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '10px',
            width: '300px',
            textAlign: 'center'
        }}>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
        </div>
    )
};

export default Modal