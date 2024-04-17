import RevealAnimation from '@/utils/Animations';
import React, { useState } from 'react';

interface InputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute | undefined | 'text';
  placeholder?: string;
  className?: string;
  isLabelHidden?: boolean;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: any;
  onBlur?: any;
  onFocus?: any;
  isValid?: boolean;
  setIsValid?: any;
  errorMessage?: string;
  setErrorMessage?: any;
  handleKeyDown?: any;
  stepCount?: string | number;
}
const InputField = ({ ...props }: InputProps) => {
  const {
    name,
    label,
    type,
    value,
    onChange,
    placeholder,
    required,
    disabled,
    className,
    onBlur,
    onFocus,
    rows,
    isLabelHidden,
    setIsValid,
    errorMessage,
    setErrorMessage,
    handleKeyDown,
    stepCount
  } = props;



  const handleSubmitResponse = (name:string, e:any) => {
    onChange(name, e.target.value);
    if (!e.target.value.trim()) {
      setIsValid(false);
      setErrorMessage('Please fill the field');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === 'email' && !emailPattern.test(e.target.value)) {
      setIsValid(false);
      setErrorMessage('Please enter a valid email address');
      return;
    }
    setErrorMessage('');
    setIsValid(true)
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
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          rows={rows}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={className || ''}
        />
      ) : (
        <>
          <input
            name={name}
            type='text'
            value={value}
            onChange={(e) => handleSubmitResponse(name as string, e)}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            required={required || true}
            onKeyDown={(e)=>handleKeyDown(stepCount, e)}
            disabled={disabled}
            className={className || ''}
          />
      {errorMessage &&     <RevealAnimation width='fit-content' durationValue={0.25}>
            <div className='my-4 text-red-800 text-lg py-1 px-2 rounded  w-fit bg-red-200'>
           <span>⚠</span>  {errorMessage || " Something went wrong!"}
            </div>
          </RevealAnimation>}
        </>
      )}
    </div>
  );
};

export default InputField;
