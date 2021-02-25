import React, {useEffect} from 'react';
import logoCircle from '../../assets/img/logo/logo-circle.png'
import {PreloaderWrap} from './preloader.stc'

const Preloader = () => {
	const rnPrealoaderSetup = () => {
		var rnPre = document.querySelector('#rn-preloader-wrap');
		var isPhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	    if (!isPhone) {
	        setTimeout(function() {
	            rnPre.classList.add('rn-preloaded');
	        }, 900);
	        setTimeout(function() {
                rnPre.classList.add('remove');
	        }, 1500);

	    } else {
	        rnPre.classList.add('remove');
        }
    }
    useEffect(() => {
        rnPrealoaderSetup();
    })
    return (
        <PreloaderWrap id="rn-preloader-wrap">
            <div className="rn-preloader-box">
                <div className="rn-preloader-content">
                    <div className="rn-preloader-circle"></div>
                    <div className="rn-preloader-line-mask">
                        <div className="rn-preloader-line"></div>
                    </div>
                    <img src={logoCircle} alt="logo"/>
                </div>
            </div>
        </PreloaderWrap>
    )
}

export default Preloader;