import React from 'react'
import PropTypes from 'prop-types';
import {SocialLink} from './sociallink'
import {SocialWrap} from './social.stc'

const Social = ({children, ...props}) => {
    return <SocialWrap {...props}>{children}</SocialWrap>
}

Social.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    lineHeight: PropTypes.string,
    opacity: PropTypes.number,
    space: PropTypes.number,
    vertical: PropTypes.bool,
}

Social.defaultProps = {
    color: '#fff'
}

export {SocialLink}
export default Social
 