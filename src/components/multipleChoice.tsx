import React, { useState } from 'react';

interface MultipleChoice {
  className?: string;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: any;
  options?:
    | {
        serial: string;
        value: string;
      }[]
    | [];
  moreThenOne?: boolean;
  isValid?: boolean;
  setIsValid?: any;
  errorMessage?: string;
  setErrorMessage?: any;
  handleKeyDown?: any;
  stepCount?: string | number;
}
const MultipleChoice = ({ ...props }: MultipleChoice) => {
  const {
    name,
    value,
    onChange,
    required,
    className,
    options,
    moreThenOne,
    setIsValid,
    errorMessage,
    setErrorMessage,
    handleKeyDown,
    stepCount,
  } = props;
  const [selectedOp, setSelectedOp] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [isother, setIsother] = useState(false);
  //@ts-ignore
  const handleOptionSelect = (option) => {
    //@ts-ignore
    const isSelected = selectedOp.includes(option);
    if (isSelected) {
      setSelectedOp(selectedOp.filter((op) => op !== option));
      onChange(
        'selected',
        selectedOp.filter((op) => op !== option)
      );
    } else {
      //@ts-ignore
      setSelectedOp([...selectedOp, option]);
      onChange('goal', [...selectedOp, option]);
    }
  };

  const handleSubmitResponse = (name: string, option: string) => {
    // e.preventDefault();
    setSelectedOption(option);
    if (!option.trim()) {
      setIsValid(false);
      setErrorMessage('Please select option');
      return;
    }
    if (option === 'Other') {
      setIsother(true);
      return;
    } else {
      setIsother(false);
    }
    // if(option==="Other"){

    //    onChange( onChange(name,option) )
    // }
    onChange(name, option);

    setErrorMessage('');
    // setIsValid(true);
  };
  return (
    <div className='multiple-choice-question'>
      {moreThenOne ? (
        <ul className='options-list'>
          {options &&
            options?.map((option, index) => (
              <li
                key={index}
                className={`option relative my-4 text-lg cursor-pointer border-2 w-fit p-1 min-w-72 rounded  ${
                  //@ts-ignore
                  selectedOp.includes(option)
                    ? 'selected border-white-900 bg-[#ffffff1a]'
                    : 'bg-[#ffffff1a] border-gray-500	 '
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                <>
                  <span
                    className={` ${
                      //@ts-ignore
                      selectedOp.includes(option)
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                    } px-2 rounded mr-2 border-2`}
                  >
                    {option?.serial}
                  </span>
                  {option?.value}
                </>
                {/* @ts-ignore */}
                {selectedOp.includes(option) && (
                  <div className='absolute top-2 right-2'>✓</div>
                )}
              </li>
            ))}
        </ul>
      ) : (
        <ul className='options-list'>
          {options &&
            options?.map((option, index) => (
              <li
                key={index}
                className={`option relative my-4 text-lg cursor-pointer border-2 w-fit p-1 min-w-72 rounded  ${
                  //@ts-ignore
                  selectedOption === option?.value
                    ? 'selected border-white-900 bg-[#ffffff1a]'
                    : 'bg-[#ffffff1a] border-gray-500	 '
                }`}
                //@ts-ignore
                onClick={() => handleSubmitResponse('role', option?.value)}
              >
                <>
                  <span
                    className={` ${
                      //@ts-ignore
                      selectedOption === option?.value
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                    } px-2 rounded mr-2 border-2`}
                  >
                    {option?.serial}
                  </span>
                  {option?.value}
                  {selectedOption === 'Other' && index === options.length-1 && (
                    <input
                      type='text'
                      name='other'
                      placeholder='Enter Other'
                      className='outline-none bg-[transparent] w-full text-white mt-2 '
                      onChange={(e)=>handleSubmitResponse('role', e.target.value)}
                    />
                  )}
                </>
                {/* @ts-ignore */}
                {selectedOption === option?.value && (
                  <div className='absolute top-2 right-2'>✓</div>
                )}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MultipleChoice;
