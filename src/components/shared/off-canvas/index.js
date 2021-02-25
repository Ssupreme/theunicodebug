import React from 'react'
import {OffCanvasHeader} from './off-canvas-header'
import {OffCanvasBody} from './off-canvas-body'
import {OffCanvaseWrap, OffCanvasInner} from './off-canvas.style'

const OffCanvas = ({children, onClick, ...props}) => {
    return (
        <OffCanvaseWrap {...props} onClick={onClick}>
            <OffCanvasInner {...props} onClick={(e) => e.stopPropagation()}>
                {children}
            </OffCanvasInner>
        </OffCanvaseWrap>
    )
}

export {OffCanvasHeader, OffCanvasBody};
export default OffCanvas
