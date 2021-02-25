import React from 'react';
import { InputWrap } from './input.stc'

export const Input = React.forwardRef((props, ref) => {
    const { type, value, placeholder, name, id, onChange, ...restProps } = props;
    return (
        <InputWrap
            ref={ref}
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            id={id}
            onChange={onChange}
            {...restProps}
        />
    )
})
