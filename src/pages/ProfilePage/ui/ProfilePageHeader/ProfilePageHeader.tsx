import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(
        () => {
            dispatch(profileActions.setReadOnly(false));
        },
        [dispatch],
    );

    const onCancelEdit = useCallback(
        () => {
            dispatch(profileActions.cancelEdit());
        },
        [dispatch],
    );

    const onSave = useCallback(
        () => {
            dispatch(updateProfileData());
        },
        [dispatch],
    );

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readOnly
                ? (
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
        </div>
    );
};
