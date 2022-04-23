import React from 'react';
import useShrink from '../hook/useShrink';
import { Transition } from '@headlessui/react';
import cx from 'classnames';
import { useWindowSize } from 'usehooks-ts';

// components
import ScrollTop from './ScrollTop';
import GooglePlayBtn from './Btn/GooglePlayBtn';
import AppStoreBtn from './Btn/AppStoreBtn';

const FloatArea = ({ link }) => {
  const { width } = useWindowSize();
  const Shrink = useShrink(width > 1280 ? 720 : 100);

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
          '#hug:pr-cpx',
          'absolute flex gap-x-[10px] gap-y-[20px] right-0 bottom-[30px] flex-col',
          'hug:left-full hug:translate-x-[60px] hug:right-auto hug:bottom-[130px]',
        )}
      >
        <AppStoreBtn />
        <GooglePlayBtn />
        <ScrollTop link={link} />
      </div>
    </Transition>
  );
};

export default FloatArea;
