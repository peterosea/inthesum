import React from 'react';

const Select = ({ options }) => {
  return (
    <>
      <label for="tabs" className="sr-only">
        Select a tab
      </label>
      <select
        id="tabs"
        name="tabs"
        className="leading-none block w-full focus:outline-none focus:shadow-none focus:ring-0 focus:border-primary border-[#e6eaf2] font-Pretendard text-[14px] pl-[26px] py-[21px] text-[#333] focus:text-black"
      >
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
