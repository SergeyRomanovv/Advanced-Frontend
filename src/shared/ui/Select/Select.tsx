import { ChangeEvent, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[]
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
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
        onChange?.(event.target.value);
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
});
