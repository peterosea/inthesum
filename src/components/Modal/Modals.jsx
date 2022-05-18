import React, { useState, useCallback, useEffect } from 'react';
import Modal from '.';
import IeDeprecated from './content/IeDeprecated';
import Notice0407 from './content/Notice0407';
import HealingLift from './content/HealingLift';
import Login from './content/Login';

const Modals = () => {
  const [helpModal, setHelpModal] = useState(false);
  const openModal = useCallback((e) => {
    if (e.keyCode === 191) {
      setHelpModal(true);
    }
  });

  useEffect(() => {
    window.addEventListener('keydown', openModal);
    return () => {
      window.removeEventListener('keydown', openModal);
    };
  }, [openModal]);

  // modal type
  const [modalType, setModalType] = useState({
    type1: false,
    type2: false,
    type3: false,
    type4: false,
  });
  const openModalType = (type) => {
    const cModalType = Object.assign(modalType);
    cModalType[type] = true;
    setModalType({
      ...cModalType,
    });
    setHelpModal(false);
  };
  const closeModalType = (type) => {
    const cModalType = Object.assign(modalType);
    cModalType[type] = false;
    setModalType({
      ...cModalType,
    });
    setHelpModal(true);
  };

  return (
    <>
      <Modal isOpen={helpModal} onClose={() => setHelpModal(false)}>
        <div className='bg-[#F4F6FA] p-[40px] pt-[46px] text-left  border-t-[3px] border-primary'>
          <div className="flex gap-x-[8px]">
            <button
              className="inline-block py-[3px] px-[10px] bg-teal-500 rounded-full mr-[8px] text-sm font-semibold text-white"
              onClick={() => openModalType('type1')}
            >
              Modal 1
            </button>
            <button
              className="inline-block py-[3px] px-[10px] bg-teal-500 rounded-full mr-[8px] text-sm font-semibold text-white"
              onClick={() => openModalType('type2')}
            >
              Modal 2
            </button>
            <button
              className="inline-block py-[3px] px-[10px] bg-teal-500 rounded-full mr-[8px] text-sm font-semibold text-white"
              onClick={() => openModalType('type3')}
            >
              Modal 3
            </button>
            <button
              className="inline-block py-[3px] px-[10px] bg-teal-500 rounded-full mr-[8px] text-sm font-semibold text-white"
              onClick={() => openModalType('type4')}
            >
              로그인
            </button>
          </div>
        </div>
      </Modal>
      <Modal isOpen={modalType.type1} onClose={() => closeModalType('type1')}>
        <IeDeprecated />
      </Modal>
      <Modal
        isOpen={modalType.type2}
        onClose={() => closeModalType('type2')}
        timeClose={true}
      >
        <Notice0407 />
      </Modal>
      <Modal
        isOpen={modalType.type3}
        onClose={() => closeModalType('type3')}
        timeClose={true}
      >
        <HealingLift />
      </Modal>
      <Modal
        isOpen={modalType.type4}
        onClose={() => closeModalType('type4')}
      >
        <Login />
      </Modal>
    </>
  );
};

export default Modals;
