import React, { createContext, useContext, useState } from 'react';

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [steps, setSteps] = useState(0);
  const stepGoal = 10000;

  const addSteps = (amount = 100) => {
    setSteps(prev => Math.min(prev + amount, stepGoal));
  };

  const resetSteps = () => {
    setSteps(0);
  };

  return (
    <StepContext.Provider value={{ steps, stepGoal, addSteps, resetSteps }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => useContext(StepContext);
