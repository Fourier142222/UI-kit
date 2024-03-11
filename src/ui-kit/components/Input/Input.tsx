import React, {
    InputHTMLAttributes, memo
} from 'react';
import { Mods, classNames } from '../../utils/utils';
import {useStyles} from './styles';
import {useTheme} from '../../themes/themes';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    type: 'text' | 'number' | 'email' | 'password'
    value: string | number
    wrapperClassName?: string
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
    testId?: string
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

//Добавить работу с фокусом
export const Input = memo((props: InputProps) => {
    const {
        type,
        value,
        name,
        placeholder,
        readonly,
        wrapperClassName,
        className,
        testId,
        onChange,
        ...otherProps
    } = props;
    const theme = useTheme();
    const cls = useStyles({theme: theme});

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.wrapper, {}, [wrapperClassName])}>
            <input
                className={classNames(cls.input, mods, [className])}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                readOnly={readonly}
                data-testid={testId}   
                {...otherProps}
            />
      </div>
    );
});
