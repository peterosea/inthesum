import React from 'react';
import useShrink from '../hook/useShrink';
import { Transition } from '@headlessui/react';
import cx from 'classnames';
// components
import ScrollTop from './ScrollTop';
import GooglePlayBtn from './Btn/GooglePlayBtn';
import AppStoreBtn from './Btn/AppStoreBtn';

const FloatArea = () => {
  const topShrink = useShrink(window.innerHeight * 0.8 - 110);
  const bottomShrink = useShrink(document.body.scrollHeight - 800);
  let Shrink = false;
  if (topShrink) {
    Shrink = true;
    if (bottomShrink) {
      Shrink = false;
    }
  }

  return (
    <Transition
      show={Shrink}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="container mx-auto sticky bottom-0 z-40"
    >
      <div
        className={cx(
          'absolute flex gap-x-[10px] gap-y-[20px] right-0 bottom-[30px] #hug:pr-cpx',
          'hug:left-full hug:translate-x-[60px] hug:right-auto hug:bottom-[130px] hug:flex-col',
        )}
      >
        <AppStoreBtn />
        <GooglePlayBtn />
        <ScrollTop />
      </div>
    </Transition>
  );
};

export default FloatArea;
