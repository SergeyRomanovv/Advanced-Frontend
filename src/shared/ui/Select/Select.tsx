import { ChangeEvent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[]
    value?: T;
    onChange?: (value: T) => void;
    readOnly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readOnly,
    } = props;

    const { t } = useTranslation();

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value as T);
    };

    const mods: Mods = {};
    return (
        <div className={classNames(cls.Wraper, mods, [className])}>
            {label && (
                <span className={classNames(cls.label)}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={classNames(cls.select)}
                disabled={readOnly}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
