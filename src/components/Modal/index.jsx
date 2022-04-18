import { Transition } from '@headlessui/react';
import { useLockedBody } from 'usehooks-ts';

/**
 *
 * @property {boolean} isOpen
 * @property {()=> void} onClose
 */
const Modal = ({
  isOpen = true,
  onClose = () => console.log('test'),
  children,
}) => {
  useLockedBody(isOpen);
  return (
    <Transition
      show={isOpen}
      className="fixed z-[100] inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        />

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          className="relative inline-block align-bottom bg-white p-[40px] pt-[46px] text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-[425px] sm:w-full"
        >
          <button
            className="absolute top-[20px] right-[17px]"
            onClick={onClose}
          >
            <i className="icon-close text-black text-[18px]"></i>
          </button>
          <div>{children}</div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default Modal;
