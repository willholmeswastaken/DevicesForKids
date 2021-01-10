import React, { useState } from 'react';
import { useWindowResize } from 'beautiful-react-hooks';

const FundraiserTracker = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useWindowResize((event) => setWindowWidth(window.innerWidth));

    const dimensions = {
        width: '80%',
        height : '210px'
    };

    if (windowWidth < 768) {
        dimensions.width = '100%';
        dimensions.height = '250px';
    }  else if (windowWidth >= 768 && windowWidth < 1024) {
        dimensions.width = '80%';
        dimensions.height = '240px';
    } else if (windowWidth >= 1024 && windowWidth < 1440) {
        dimensions.width = '80%';
    } else if (windowWidth >= 1440 && windowWidth < 1536) {
        dimensions.width = '95%';
    }

    return (
        <>
            <iframe
                src="https://www.gofundme.com/f/help-keep-local-leicestershire-children-learning/widget/medium/"
                frameBorder="0"
                width={dimensions.width}
                height={dimensions.height}
                scrolling="no"></iframe>
        </>
    )
}

export default FundraiserTracker;