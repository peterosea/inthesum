import React, { useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';

const DefButton = ({ children }) => (
  <button
    type="button"
    className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
    aria-haspopup="listbox"
    aria-expanded="true"
    aria-labelledby="listbox-label"
  >
    <span className="block truncate">{children}</span>
    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      {/* <!-- Heroicon name: solid/selector --> */}
      <svg
        className="h-5 w-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </button>
);
/**
 *
 * @property {[
 *  id: string,
 *  name: string
 * ]} options
 * @property {JSX.Element} button <button>option name</button>
 * @property {string | undefined} name
 */
const Select = ({ options, button = DefButton, name }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectId, setSelectId] = useState(options[0].id);
  const [selectName, setSelectName] = useState(options[0].name);

  useOnClickOutside(ref, () => setIsOpen(false));

  const handleOptionSelect = (value, name) => {
    setIsOpen(false);
    setSelectId(value);
    setSelectName(name);
  };

  const Button = ({ children }) =>
    React.cloneElement(button({ children }), {
      onClick: () => setIsOpen(!isOpen),
    });

  return (
    <div ref={ref}>
      <label className="sr-only">Select a tab</label>
      <div className="relative">
        <Button>{selectName}</Button>
        <Transition
          show={isOpen}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={classNames(
            'absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm',
            { 'mt-1': name === undefined },
            { 'mb-2 bottom-full mt-0 min-w-[100px] right-0': name === 'mnb' },
            { 'mt-3 min-w-[80px] right-0 top-full': name === 'gnb' },
          )}
        >
          <ul
            tabIndex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {options.map(({ id, name }) => {
              const isSelect = selectId === id;
              return (
                <li
                  key={id}
                  className={classNames(
                    'text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 group',
                    'hover:text-white hover:bg-primary',
                    {
                      'font-bold': isSelect,
                    },
                  )}
                  role="option"
                  onClick={() => handleOptionSelect(id, name)}
                >
                  <span
                    className={classNames(
                      'block truncate',
                      {
                        'font-semibold': isSelect,
                      },
                      { 'font-normal': !isSelect },
                    )}
                  >
                    {name}
                  </span>
                  <span
                    className={classNames(
                      'text-primary absolute inset-y-0 right-0 flex items-center pr-4',
                      { 'group-hover:text-white': isSelect },
                      { 'opacity-0': !isSelect },
                    )}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
              );
            })}
          </ul>
        </Transition>
      </div>
    </div>
  );
};

export default Select;
