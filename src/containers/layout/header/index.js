import React, {Fragment, useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import { TimelineMax, CSSPlugin} from "gsap/all"; 
import OverlaySection from '../overlay-section'
import Logo from '../../../components/shared/logo';
import MenuToggle from '../../../components/shared/menu-toggle';
import HamBurger from '../../../components/shared/ham-burger'
import {
    HeaderWrapper, 
    HeaderOuter, 
    HeaderInner, 
    Container,
    HeaderMain,
    HeaderCol,
    HeaderHeight
} from './header.stc';

const Header = ({logoStyle, layout}) => {
    const [height, setHeight] = useState(0);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const ref = useRef(null);
    var timeline = new TimelineMax({ paused: true, reversed: true });
    CSSPlugin.defaultTransformPerspective = 600;
    useEffect(() => {
        setHeight(ref.current.clientHeight)
    }, [height]);
    
    const [stick, setStick] = useState(false) 
    const [pinned, setPinned] = useState(false) 
    const [unpinned, setUnpinned] = useState(false);
    
    var position;
    useEffect(() => {
        position = window.pageYOffset
    })
    const scrollHandler = () => {
      let scrollPos = window.pageYOffset;
      if(scrollPos > height){
        setStick(true);
        setUnpinned(true);
      }else{
        setStick(false);
        setUnpinned(false);
      }
      if(scrollPos < height){
        setPinned(false);
      }else if(scrollPos < position){
        setPinned(true);
        setUnpinned(false);
      }else{
        setPinned(false);
      }
      position = scrollPos  
    }
    
    useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
      if(!isOverlayOpen){
        document.querySelector('body').classList.remove('overlay-wrapper-open');
      }
      return () => {
          window.removeEventListener('scroll', scrollHandler);
      }
    });
    
    const onMenuToggleClick = () => {
        setIsOverlayOpen(prevState => !prevState)
    	document.querySelector('body').classList.toggle('overlay-wrapper-open');
    	document.querySelector('.ovl-menu-section').classList.toggle('menu-open');
    	document.querySelector('.ovl-logo').classList.toggle('animated');
    	document.querySelector('.ovl-map').classList.toggle('animated');
    	document.querySelector('.ovl-social').classList.toggle('animated');
    	document.querySelector('.ovl-quick-info').classList.toggle('animated');
    	document.querySelector('.ovl-right').classList.toggle('animated');
    	timeline.reversed() ? timeline.play() : timeline.reverse()
    }
    return (
        <Fragment>
            <HeaderWrapper transparent layout={layout} isStick={stick}>
                <HeaderOuter isPinned={pinned} isUnpinned={unpinned}>
                    <HeaderHeight height={height}/>
                    <HeaderInner transparent ref={ref}>
                        <Container>
                            <HeaderMain>
                                <HeaderCol left>
                                    <Logo layout={layout} sticky={pinned} {...logoStyle}/>
                                </HeaderCol>
                                <HeaderCol right>
                                    <MenuToggle className="menu-toggle" sticky={pinned} onClick={onMenuToggleClick}>
                                        <HamBurger sticky={pinned} className="hamburger"/>
                                    </MenuToggle>
                                </HeaderCol>
                            </HeaderMain>
                        </Container>
                    </HeaderInner>
                </HeaderOuter>
            </HeaderWrapper>
            <OverlaySection isOpen={isOverlayOpen} onClick={onMenuToggleClick}/>
        </Fragment>
    )
}

Header.propTypes = {
    logoStyle: PropTypes.object
}

Header.defaultProps = {
    logoStyle: {
        responsive: {
            small: {
                maxwidth: '60%'
            },
            xsmall: {
                maxwidth: '80%'
            }
        }
    }
}

export default Header
