import React from 'react'
import PropTypes, { oneOf } from 'prop-types';
import {TextWrapper} from './text.stc'

const Text = ({children, ...props}) => {
    return <TextWrapper {...props}>{children}</TextWrapper>
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    align: PropTypes.string,
    lineHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    spacer: PropTypes.object,
    maxWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    letterspacing: PropTypes.string,
    pt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    as: oneOf(['p', 'a', 'span', 'strong', 'em'])
}


export default Text
