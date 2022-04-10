import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useShrink = (topPx = 20) => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > topPx ||
            document.documentElement.scrollTop > topPx)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < topPx - 2 &&
          document.documentElement.scrollTop < topPx - 2
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return isShrunk;
};

export default useShrink;
