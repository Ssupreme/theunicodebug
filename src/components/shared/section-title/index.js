import React from 'react'
import PropTypes from 'prop-types';
import Heading from '../heading'
import Text from '../text'
import {TitleWrapper} from './section-title.stc'

const SectionTitle = ({title, subtitle, titleStyle, subtitleStyle}) => {
    return (
        <TitleWrapper>
            {subtitle && <Text {...subtitleStyle}>{subtitle}</Text>}
            {title && <Heading {...titleStyle}>{title}</Heading>}
        </TitleWrapper>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    titleStyle: PropTypes.object,
    subtitleStyle: PropTypes.object
}
SectionTitle.defaultProps = {
    titleStyle: {
        fontSize: '36px',
        color: 'primary',
        fontweight: 600,
        responsive: {
            xlarge: {
                fontSize: '28px'
            },
            large: {
                fontSize: '24px',
                lineHeight: 'initial'
            },
            small: {
                fontSize: '16px'
            }
        }
    },
    subtitleStyle: {
        as: 'span',
        color: '#000',
        fontweight: 500,
        fontSize: '16px',
        texttransform: 'uppercase',
        letterspacing: '1px',
        display: 'inline-block',
        mb: '17px',
        lineHeight: 1,
        responsive: {
            xlarge: {
                fontSize: '14px',
                mb: '25px'
            },
            large: {
                fontSize: '12px',
                mb: '10px'
            }
        }
    }
};

export default SectionTitle
