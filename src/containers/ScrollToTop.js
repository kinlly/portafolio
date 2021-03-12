import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';

function ScrollToTop({ history }) {
  
  useEffect(() => {
    const unlisten = history.listen(() => {
      const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'),{
        'damping':0.05,
        'renderByPixels': true
      });
      scrollbar.scrollTo(0,0, 600);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);