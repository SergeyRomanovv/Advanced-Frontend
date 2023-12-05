import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  }
  
  return (
    <div 
      className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>TOOGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
