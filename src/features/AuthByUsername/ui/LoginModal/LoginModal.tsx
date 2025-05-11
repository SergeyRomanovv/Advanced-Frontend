import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { LazyLoginForm } from '../LoginForm/LoginForm.lazy';
import { Modal } from '@/shared/ui/Modal';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LazyLoginForm onSuccess={onClose} />
        </Suspense>
    </Modal>
);
