import { CSSProperties, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = ({
    className,
    src,
    alt = 'Изображение профиля',
    size,
}) => {
    const { t } = useTranslation();
    const mods = {};

    const styles = useMemo<CSSProperties>(() => (
        {
            width: size || 100,
            height: size || 100,
        }
    ), [size]);
    return (
        <img
            src={src}
            alt={t(alt)}
            className={classNames(cls.Avatar, mods, [className])}
            style={styles}
        />
    );
};
