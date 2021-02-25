import React, {useState, useEffect} from 'react';
import {PageScrollBarWrap, PageScroll} from './page-scroll-bar.stc';

const PageScrollBar = () => {
    const [scroll, setScroll] = useState(0)
    const pageScrollHandler = () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        setScroll(scrolled)
    }
    useEffect(() => {
        window.addEventListener('scroll', pageScrollHandler);
        return () => {
            window.removeEventListener('scroll', pageScrollHandler);
        }
    });
    
    return(
        <PageScrollBarWrap>
            <PageScroll scroll={scroll}></PageScroll>
        </PageScrollBarWrap>
    )
}

export default PageScrollBar