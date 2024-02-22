import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { SideBarItemType } from 'widgets/SideBar/model/item';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
  item: SideBarItemType;
  collapsed: boolean;
}

export const SideBarItem: FC<SideBarItemProps> = ({ item, collapsed }) => {
    const { t } = useTranslation();
    return (
        <AppLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};
