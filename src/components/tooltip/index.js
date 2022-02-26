import React, { useEffect, useState, useRef } from 'react';
import  ReactDOM  from 'react-dom';

import { Tip } from './styles/tooltip';

export default function ({ label, children }) {
    const [show, setShow] = useState(false);
    const [parentPosition, setParentPosition] = useState({});
    const parentRef = useRef(null);

    useEffect(() => {
        function updatePosition() {
            setParentPosition({
                left: parentRef.current.getBoundingClientRect().left,
                top:
                    parentRef.current.getBoundingClientRect().top +
                    parentRef.current.getBoundingClientRect().height,
            });
        }
        window.addEventListener('resize', updatePosition);
        updatePosition();
        return () => window.removeEventListener('resize', updatePosition);
    }, []);

    return (
        <>
            {show
                ? ReactDOM.createPortal(
                    <Tip tabIndex={0} parentPosition={parentPosition}>
                        {label}
                    </Tip>,
                    document.body
                )
                : null}
            <span
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
                onFocus={() => undefined}
                onBlur={() => undefined}
                ref={parentRef}
            >
                {children}
            </span>
        </>
    )
}

