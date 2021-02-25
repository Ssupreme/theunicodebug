import React from 'react';
import PropTypes from 'prop-types'
import "slick-carousel/slick/slick.css";
import {SliderWrap} from './slick.stc'


const SlickSlider = ({children, slideOptions}) => {
    return (
        <SliderWrap {...slideOptions}>{children}</SliderWrap>
    )
}

SlickSlider.propTypes = {
    slideOptions: PropTypes.object
}

SlickSlider.defaultProps = {
    slideOptions: {
        slidesToShow: 1, 
        slidesToScroll: 1, 
        speed: 500,
        dots: false,
        arrows: false,
        infinite: false
    }
}

export default SlickSlider;