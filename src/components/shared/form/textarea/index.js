import React from 'react';
import { TextareaWrap } from './textarea.stc'

export const Textarea = React.forwardRef((props, ref) => {
    const { type, value, placeholder, name, id, onChange, ...restProps } = props;
    return (
        <TextareaWrap
            ref={ref}
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            id={id}
            onChange={onChange}
            {...restProps}
        ></TextareaWrap>
    )
})
