import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { data } from './api/data';
import InputField from '@/components/inputField';
import Dropdown from '@/components/dropdown';
import MultipleChoice from '@/components/multipleChoice';
import Progress from '@/components/progressBar';
import Lottie from 'react-lottie';
import animationData from '../images/submited.json';
import Loading from '@/components/loading';

export default function Home() {
  // defined useState
  const [formData, setFormData] = useState({}); // store user data on object
  const [currentStep, setCurrentStep] = useState(1); // manage step or question
  const [isValid, setIsValid] = useState(true); // manage validation
  const [errorMessage, setErrorMessage] = useState(''); // manage error messages
  const [isLoading, setIsloading] = useState(true); // manage loading

  // handle user response and store on state called formData
  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  // handle next step or question with proper validation and error handling
  const handleNext = (stepCount: string) => {
    if (
      stepCount !== '' &&
      Object.keys(formData)[Number(stepCount) - 1] === ('' || undefined)
    ) {
      setIsValid(false);
      setErrorMessage('Required!');
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  // handle previous step or question, *(in future we need to handle previous step)
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  // onSubmit trigger function (not implemented yet)
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  // handle user response on press enter button
  const handleKeyDown = (stepCount: string, e: any) => {
    if (e.key === 'Enter') {
      handleNext(stepCount);
    }
  };

  useEffect(() => {
    setInterval(() => setIsloading(false), 1000);
  }, []);

  return (
    <>
      <div className='w-screen flex justify-center align-middle'>
        <Progress currentStep={currentStep} totalSteps={data.length} />
        {data &&
          data.map((step) => (
            <motion.div
              style={{ display: currentStep === step.id ? 'flex' : 'none' }}
              key={step.id}
              transition={{ duration: 1, delay: 0.1 }}
              initial='hidden'
              animate='visible'
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                },
                hidden: {
                  opacity: 0,
                  y: 56,
                },
              }}
              className={`container p-5 ${
                currentStep === step.id ? 'flex' : 'none'
              } justify-center gap-4 align-middle min-h-[70vh] flex-col max-w-screen-md`}
            >
              {/* question */}
              <h3 className='lg:text-[28px] md:text-[26px] sm:text-[24px] text-[24px] font-thin text-white-900'>
                {step?.question}
              </h3>
              {/* description */}
              <div className='lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] font-thin text-white-900 opacity-80'>
                {step?.desc}
              </div>
              {/* NOTICE */}
              <p className='lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] font-thin text-white-900 opacity-80 italic'>
                {step?.note}
              </p>
              {/* input */}
              {step?.type === 'dropdown' ? (
                <Dropdown
                  options={step?.options as string[] | undefined}
                  onChange={handleChange}
                  placeholder={step?.placeholder}
                  className='lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] py-1 px-2 bg-[transparent] border-b-2 border-white outline-none'
                  name={step?.name}
                  setIsValid={setIsValid}
                  stepCount={step?.stepCount}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              ) : step?.type === 'multiple' ? (
                <MultipleChoice
                  options={
                    step?.options as {
                      serial: string;
                      value: string;
                    }[]
                  }
                  moreThenOne={false}
                  onChange={handleChange}
                  name={step?.name}
                  setIsValid={setIsValid}
                  stepCount={step?.stepCount}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  handleKeyDown={handleKeyDown}
                />
              ) : step?.type === 'multiple-morethanone' ? (
                <MultipleChoice
                  options={
                    step?.options as {
                      serial: string;
                      value: string;
                    }[]
                  }
                  moreThenOne={true}
                  onChange={handleChange}
                  name={step?.name}
                  setIsValid={setIsValid}
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
                  className='lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] py-1 px-2 bg-[transparent] border-b-2 border-white outline-none '
                />
              ) : (
                <></>
              )}
              {/* done button or move next button */}
              <div>
                <button
                  onClick={() => handleNext(step?.stepCount as string)}
                  disabled={!isValid}
                  className={`btn cursor-pointer lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] rounded py-2 px-3 ${
                    errorMessage && !isValid
                      ? 'bg-[#142a4db3] '
                      : 'bg-[#0066FF] '
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
            <div style={{ width: '300px', height: '300px' }}>
              <Lottie
                options={{
                  animationData: animationData,
                  loop: true,
                  autoplay: true,
                }}
              />
            </div>
            <p className='text-3xl my-8'>Thankyou for Submittion</p>
          </div>
        )}
      </div>
      {/* {isLoading && <Loading />} */}
    </>
  );
}
