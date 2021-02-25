import React from 'react'
import PropTypes from 'prop-types'
import Text from '../shared/text'
import Heading from '../shared/heading'
import {ContentWrapper, ContentLeft, ContentRight} from './slide-content.stc';

const SlideContent = ({titleStyle, subtitleStyle, textStyle, ...props}) => {
    const {title, date, text} = props;
    return (
        <ContentWrapper>
            <ContentLeft>
                {date && <Text {...subtitleStyle}>{date}</Text>}
                {title && <Heading {...titleStyle}>{title}</Heading>}
            </ContentLeft>
            <ContentRight>
                {text && <Text {...textStyle}>{text}</Text>}
            </ContentRight>
        </ContentWrapper>
    )
} 

SlideContent.propTypes = {
    titleStyle: PropTypes.object,
    subtitleStyle: PropTypes.object,
    textStyle: PropTypes.object
}

SlideContent.defaultProps = {
    titleStyle: {
        as: 'h1',
        color: '#ffffff',
        fontweight: 600,
        letterspacing: '1px',
        lineheight: 'initial',
        fontSize: '30px',
        m: 0,
        responsive: {
            xlarge: {
                fontSize: '22px'
            },
            large: {
                fontSize: '18px'
            },
            small: {
                fontSize: '16px'
            }
        }
    },
    subtitleStyle: {
        color: '#ffffff',
        fontSize: '12px',
        letterspacing: '1px',
        fontweight: 300
    },
    textStyle: {
        color: '#ffffff',
        lineheight: '26px',
        letterspacing: '1px',
        fontSize: '16px',
        m: 0,
        responsive: {
            xlarge: {
                fontSize: '14px'
            },
            large: {
                fontSize: '12px',
                lineheight: '24px'
            }
        }
    }
} 

export default SlideContent
 