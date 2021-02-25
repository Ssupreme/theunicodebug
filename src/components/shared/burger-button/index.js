import React from 'react'
import PropTypes from 'prop-types'
import {BurgerButtonWrap} from './burger-button.style'

const BurgerButton = ({onClick, ...props}) => {
    return (
        <BurgerButtonWrap type="button" onClick={onClick} {...props}>
            <span></span>
        </BurgerButtonWrap>
    )
}

BurgerButton.propTypes = {
    onClick: PropTypes.func
}

export default BurgerButton
