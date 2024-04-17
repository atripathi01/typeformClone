import { Inter } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { data } from './api/data';
import InputField from '@/components/inputField';
import Dropdown from '@/components/dropdown';
import MultipleChoice from '@/components/multipleChoice';
import Progress from '@/components/progressBar';
import Image from 'next/image';
import Done from '../images/success-svgrepo-com.svg';
// import { KeyboardReturn} from '@mui/icons-material';

const inter = Inter({ subsets: ['latin'] });

const steps = [
  { id: 1, question: 'Step 1', field: 'Name' },
  { id: 2, question: 'Step 2', field: 'Email' },
  { id: 3, question: 'Step 3', field: 'Password' },
];
export default function Home() {
  //   const [data, setData] = useState({});
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  console.log(formData);
  const scrollRef = useRef(null);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    // @ts-ignore
    const currentScrollY = scrollRef.current.scrollTop;
    if (currentScrollY > prevScrollY.current) {
      //@ts-ignore
      handleNext();
    } else {
      handlePrev();
    }
    prevScrollY.current = currentScrollY;
  };
  useEffect(() => {
    if (scrollRef.current) {
      //@ts-ignore
      scrollRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        //@ts-ignore
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  });
  //@ts-ignore
  const handleChange = (key, value) => {
    // const { name, value } = e.target;'
    setFormData({ ...formData, [key]: value });
  };

  const handleNext = (stepCount: string) => {
    //@ts-ignore
    if (
      stepCount !== '' &&
      Object.keys(formData)[Number(stepCount) - 1] === ('' || undefined)
    ) {
      setIsValid(false);
      setErrorMessage('Please fill the fields');
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  //@ts-ignore
  const { firstName, lastName, industry, email, role } = formData;

  // @ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleKeyDown = (stepCount: string, e: any) => {
    if (e.key === 'Enter') {
      //@ts-ignore
      handleNext(stepCount);
    }
  };

  return (
    <div className='w-screen flex justify-center align-middle' ref={scrollRef}>
      <Progress currentStep={currentStep} totalSteps={data.length} />
      {data &&
        data.map((step) => (
          <motion.div
            style={{ display: currentStep === step.id ? 'flex' : 'none' }}
            key={step.id}
            transition={{ duration: 0.5, delay: 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`container p-5 ${
              currentStep === step.id ? 'flex' : 'none'
            } justify-center gap-4 align-middle min-h-[70vh] flex-col max-w-screen-md`}
          >
            <h3 className='lg:text-[28px] md:text-[26px] sm:text-[24px] text-[22px] font-thin text-white-900'>
              {step?.question} 
            </h3>
            <div className='lg:text-[20px] md:text-[20px] sm:text-[18px] text-[16px] font-thin text-white-900 opacity-80'>
              {step?.desc}
            </div>
            <p className='lg:text-[20px] md:text-[20px] sm:text-[18px] text-[16px] font-thin text-white-900 opacity-80 italic'>
              {step?.note}
            </p>
            {step?.type === 'dropdown' ? (
              <Dropdown
                //@ts-ignore
                options={step?.options}
                onChange={handleChange}
                placeholder={step?.placeholder}
                className='lg:text-[20px] md:text-[20px] sm:text-[18px] text-[16px] py-1 px-2 bg-[transparent] border-b-2 border-white outline-none'
                name={step?.name}
              />
            ) : step?.type === 'multiple' ? (
              <MultipleChoice
                //   @ts-ignore
                options={step?.options || []}
                moreThenOne={false}
                onChange={handleChange}
                name={step?.name}
                stepCount={step?.stepCount}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                handleKeyDown={handleKeyDown}
              />
            ) : step?.type === 'multiple-morethanone' ? (
              <MultipleChoice
                //   @ts-ignore
                options={step?.options || []}
                moreThenOne={true}
                onChange={handleChange}
                name={step?.name}
                stepCount={step?.stepCount}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                handleKeyDown={handleKeyDown}
              />
            ) : step?.type === 'text' ? (
              <InputField
                type='text'
                onChange={handleChange}
                placeholder={step?.placeholder}
                setIsValid={setIsValid}
                name={step?.name}
                stepCount={step?.stepCount}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                handleKeyDown={handleKeyDown}
                className='lg:text-[20px] md:text-[20px] sm:text-[18px] text-[16px] py-1 px-2 bg-[transparent] border-b-2 border-white outline-none '
              />
            ) : (
              <></>
            )}
            <div>
              <button
                //@ts-ignore
                onClick={() => handleNext(step?.stepCount) as Step}
                disabled={!isValid}
                className={`btn cursor-pointer lg:text-[20px] md:text-[20px] sm:text-[18px] text-[16px] rounded py-2 px-3 ${
                  errorMessage && !isValid ? 'bg-[#142a4db3] ' : 'bg-[#0066FF] '
                }  `}
              >
                {step?.buttonText} <span className='pl-1'>✓</span>
              </button>
              <span className='ml-3'>press Enter ⏎</span>
            </div>
          </motion.div>
        ))}
      {currentStep > data.length && (
        <div className='w-[100%] h-[80vh] flex justify-center items-center flex-col align-middle p-3'>
          <Image src={Done} alt='Submittion Done' width={200} />
          <p className='text-3xl my-8'>Thankyou for Submittion</p>

        </div>
      )}
    </div>
  );
}
