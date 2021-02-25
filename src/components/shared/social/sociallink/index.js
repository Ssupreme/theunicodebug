import React from 'react'
import PropTypes from 'prop-types'
import {SocialLinkWrap} from './sociallink.stc';

export const SocialLink = ({path, children, ...props}) => {
    return <SocialLinkWrap {...props} href={path} target="_blank" rel="noopener noreferrer">{children}</SocialLinkWrap>
}

SocialLink.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string
}

