"use client"

import { createContext, useContext, useState } from "react";
import { Modal } from "antd";

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [modalProps, setModalProps] = useState({});
    const [modalContent, setModalContent] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = ({title = "", content, onOk, onCancel, confirmLoading = false, footer}) => {
        setModalProps({title, onOk, onCancel, confirmLoading, footer});
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalProps({});
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <Modal
                open={isOpen}
                title={modalProps.title}
                onOk={modalProps.onOk || closeModal}
                onCancel={modalProps.onCancel || closeModal}
                confirmLoading={modalProps.confirmLoading}
                footer={modalProps.footer}
            >
                {modalContent}
            </Modal>
        </ModalContext.Provider>    
    );
}