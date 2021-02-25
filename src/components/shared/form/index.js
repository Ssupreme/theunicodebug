import React from 'react';
import { FormWrap } from './form.stc'
import { Input } from './input'
import { Textarea } from './textarea'
import { FormGroup } from './form-group'

const Form = (props) => {
    const { method, action, children, onSubmit, ...restProps } = props;
    return (
        <FormWrap onSubmit={onSubmit} {...restProps}>
            {children}
        </FormWrap>
    )
}

export { Input, Textarea, FormGroup }

export default Form;