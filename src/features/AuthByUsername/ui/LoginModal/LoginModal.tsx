import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'widgets/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    const test = [];
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                {/* <LoginForm /> */}
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
