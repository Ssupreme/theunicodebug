import React, { Fragment, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Logo from '../../../../components/shared/logo';
import HorizontalMenu from '../../../../components/menu/horizontal-menu'
import MobileMenu from '../../../../components/menu/mobile-menu'
import MenuToggle from '../../../../components/shared/menu-toggle';
import HamBurger from '../../../../components/shared/ham-burger'
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from '../../../../components/shared/off-canvas';
import {
	HeaderWrapper,
	HeaderOuter,
	HeaderInner,
	Container,
	HeaderMain,
	HeaderCol,
	HeaderHeight,
	HeaderElement
} from './header.stc';

const Header = ({ logoStyle, menuElStyle, expandBtnStyle, layout }) => {
	const [height, setHeight] = useState(0);
	const ref = useRef(null);
	useEffect(() => {
		setHeight(ref.current.clientHeight)
	}, [height]);

	const [stick, setStick] = useState(false)
	const [pinned, setPinned] = useState(false)
	const [unpinned, setUnpinned] = useState(false);
	const [offCanvasOpen, setOffCanvasOpen] = useState(false);
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);

	const menuQuery = useStaticQuery(graphql`
        query menuDataQuery {
            allMenuJson {
                edges {
                  node {
                    id
                    path
                    title
                    isSubmenu
                    submenu{
                        title
                        path
                    }
                  }
                }
            }
        }      
    `);

	const menuArr = menuQuery.allMenuJson.edges;

	var position = useRef();
	useEffect(() => {
		position.current = window.pageYOffset
	})
	const scrollHandler = () => {
		let scrollPos = window.pageYOffset;
		if (scrollPos > height) {
			setStick(true);
			setUnpinned(true);
		} else {
			setStick(false);
			setUnpinned(false);
		}
		if (scrollPos < height) {
			setPinned(false);
		} else if (scrollPos < position.current) {
			setPinned(true);
			setUnpinned(false);
		} else {
			setPinned(false);
		}
		position.current = scrollPos
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		}
	});

	useEffect(() => {
		if (!isOverlayOpen) {
			document.querySelector('body').classList.remove('overlay-wrapper-open');
		}
		setIsOverlayOpen(false)
	}, [isOverlayOpen])

	const offCanvasHandler = () => {
		setOffCanvasOpen(prevState => !prevState)
	}

	return (
		<Fragment>
			<HeaderWrapper transparent layout={layout} isStick={stick}>
				<HeaderOuter isPinned={pinned} isUnpinned={unpinned}>
					<HeaderHeight height={height} />
					<HeaderInner transparent ref={ref}>
						<Container>
							<HeaderMain>
								<HeaderCol left>
									<Logo layout={layout} sticky={pinned} {...logoStyle} />
								</HeaderCol>
								<HeaderCol right>
									<HeaderElement {...menuElStyle}>
										<HorizontalMenu isStick={stick} menuData={menuArr} />
									</HeaderElement>
									<HeaderElement {...expandBtnStyle}>
										<MenuToggle className="menu-toggle" sticky={pinned} onClick={offCanvasHandler}>
											<HamBurger sticky={pinned} className="hamburger" />
										</MenuToggle>
									</HeaderElement>
								</HeaderCol>
							</HeaderMain>
						</Container>
					</HeaderInner>
				</HeaderOuter>
			</HeaderWrapper>
			<OffCanvas scrollable={false} isOpen={offCanvasOpen} onClick={offCanvasHandler}>
				<OffCanvasHeader onClick={offCanvasHandler}>
					<Logo darkLogo align={{ default: 'flex-start' }} />
				</OffCanvasHeader>
				<OffCanvasBody>
					<MobileMenu menuData={menuArr} />
				</OffCanvasBody>
			</OffCanvas>
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
	},
	menuElStyle: {
		responsive: {
			medium: {
				display: 'none'
			}
		}
	},
	expandBtnStyle: {
		display: 'none',
		responsive: {
			medium: {
				display: 'block'
			}
		}
	}
}

export default Header
