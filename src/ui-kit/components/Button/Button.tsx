import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import {useStyles} from './styles';
import {useTheme} from '../../themes/themes';
import { classNames, Mods } from "../../utils/utils";

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum ButtonView {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    testId?: string
    children?: ReactNode;
    disabled?: boolean;
    size?: ButtonSize;
    view?: ButtonView;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className, 
        testId = 'button',   
        size = ButtonSize.M,
        disabled,
        type,
        view = ButtonView.CLEAR,
        ...otherProps
    } = props;
    const theme = useTheme();
    const cls = useStyles({theme: theme});

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <button 
            data-testid={testId}   
            className={classNames(cls.button, mods, [className, cls[size], cls[view]])} 
            disabled={disabled}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    )
})