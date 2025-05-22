import { CSSProperties, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className,
    src,
    alt = 'Изображение профиля',
    size = 100,
    fallbackInverted,
}: AvatarProps) => {
    const { t } = useTranslation();
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
