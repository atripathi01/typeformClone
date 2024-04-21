import RevealAnimation from '@/utils/Animations';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchCountryCodeandFlags } from '@/api/apiCall';
import Image from 'next/image';

interface MobileFieldProps {
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
  options?: string[];
}
const MobileField = ({ ...props }: MobileFieldProps) => {
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
    stepCount,
    options,
  } = props;

  const [countryList, setCountryList] = useState<[string, string | {}][]>([]);

  useEffect(() => {
    function fetchCountryFlag() {
      fetchCountryCodeandFlags()
        .then((res) => {
          const array = Object.entries(res);
          setCountryList(array);
        })
        .catch((error) => console.log(error));
    }
    fetchCountryFlag();
  }, []);

  const [countryCode, setCountryCode] = useState<string | null>(null);
  const handleSubmitResponse = (name: string, e: any) => {
    if (!e.target.value.trim()) {
      setIsValid(false);
      setErrorMessage('Please fill the field');
      return;
    }
    const formattedPhoneNumber = e.target.value.replace(/\D/g, '');
    if (name === 'phone' && !countryCode) {
      setIsValid(false);
      setErrorMessage('Please Select a Country Code');
      return;
    }
    const combinedPhoneNumber =
      countryCode && countryCode + formattedPhoneNumber;

    onChange(name, combinedPhoneNumber);
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
      <div>
        <div className='flex justify-start align-middle flex-row gap-2'>
          <select
            value={value}
            // @ts-ignore
            onChange={(option) => setCountryCode(option)}
            onBlur={onBlur}
            onFocus={onFocus}
            className={className || 'dropdown'}
            required={required}
            disabled={disabled}
            name={name}
            //@ts-ignore
            placeholder={placeholder}
            style={{ width: '100px !important' }}
          >
            {countryList &&
              //@ts-ignore
              countryList?.map((option, index) => {
                return (
                  <option
                    key={index}
                    className='p-2 custom-options'
                    value={option[0]}
                  >
                    {option[0]}
                  </option>
                );
              })}
          </select>
          <input
            name={name}
            type='tel'
            value={value}
            onChange={(e) => handleSubmitResponse(name as string, e)}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            required={required || true}
            onKeyDown={(e) => handleKeyDown(stepCount, e)}
            disabled={disabled}
            className={className || ''}
            maxLength={13}
          />
        </div>
        {errorMessage && (
          <RevealAnimation width='fit-content' durationValue={0.25}>
            <div className='my-4 text-red-800 text-lg py-1 px-2 rounded  w-fit bg-red-200'>
              <span>⚠</span> {errorMessage || ' Something went wrong!'}
            </div>
          </RevealAnimation>
        )}
      </div>
    </div>
  );
};

export default MobileField;
