import React from 'react'
import Scrollbar from 'smooth-scrollbar';

function useSmoothScroll() { 

    const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'),{
        'damping':0.05,
        'renderByPixels': true
      });
    scrollbar.scrollTo(0,0, 600);

    return (
        <></>
    )
}

export default useSmoothScroll
