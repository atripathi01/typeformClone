import React from 'react';

interface Progressbar{
    currentStep: number;
    totalSteps: number;
}
const Progress = ({ currentStep, totalSteps }:Progressbar) => {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="progress-bar absolute top-0 left-0 w-screen h-1 bg-slate-400">
      <div className="progress bg-[#0066FF] h-1"  style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default Progress;
