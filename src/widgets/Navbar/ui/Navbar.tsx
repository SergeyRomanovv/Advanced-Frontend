import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'widgets/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            // eslint-disable-next-line i18next/no-literal-string
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit ipsam rem minus aperiam obcaecati deleniti quibusdam sunt, consequatur, ratione, laudantium autem dolores tenetur exercitationem facilis sequi molestias nobis fuga.
            </Modal>
        </div>
    );
};
