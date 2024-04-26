import RevealAnimation from '@/utils/Animations';
import React from 'react';

interface Dropdown {
  label?: string;
  placeholder?: string;
  className?: string;
  isLabelHidden?: boolean;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: any;
  onBlur?: any;
  onFocus?: any;
  options?: string[];
  isValid?: boolean;
  setIsValid?: any;
  errorMessage?: string;
  setErrorMessage?: any;
  handleKeyDown?: any;
  stepCount?: string | number;
}
const Dropdown = ({ ...props }: Dropdown) => {
  const {
    name,
    label,
    value,
    onChange,
    placeholder,
    required,
    disabled,
    className,
    onBlur,
    onFocus,
    isLabelHidden,
    options,
    setIsValid,
    errorMessage,
    setErrorMessage,
    stepCount,
  } = props;

  const handleSubmitResponse = (name: string, option: any) => {
    if (!option.target.value.trim()) {
      setIsValid(false);
      setErrorMessage('Please fill the field');
      return;
    }
    onChange(name, option.target.value);
    setErrorMessage('');
    setIsValid(true);
  };

  return (
    <div className='flex justify-start align-top flex-col'>
      {!isLabelHidden && label && (
        <label
          className='block text-sm font-medium text-gray-700'
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(option) => handleSubmitResponse(name as string, option)}
        onBlur={onBlur} 
        onFocus={onFocus}
        className={className || 'dropdown'}
        required={required}
        disabled={disabled}
        name={name}
        //@ts-ignore
        placeholder={placeholder}
      >
        {
          options?.map((option, index) => {
            return (
              <option
                key={index}
                className='p-2 custom-options'
                value={option}
              >
                {option}
              </option>
            );
          })}
      </select>
      {errorMessage && (
        <RevealAnimation width='fit-content' durationValue={0.25}>
          <div className='my-4 text-red-800 text-lg py-1 px-2 rounded  w-fit bg-red-200'>
            <span>⚠</span> {errorMessage || ' Something went wrong!'}
          </div>
        </RevealAnimation>
      )}
    </div>
  );
};

export default Dropdown;
