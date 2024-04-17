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
  options?:string[];
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
  } = props;
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
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={className||''}
        required={required}
        disabled={disabled}
        name={name}
        //@ts-ignore
        placeholder={placeholder}
      >
        {options &&
          //@ts-ignore
          options?.map((option, index) => {
            return (
              <option key={index} className='p-2' value={option}>
             {option}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Dropdown;
