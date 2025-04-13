import React from "react";


const SignupFlow = ({steps,currentStep}) => {
  return (
    <div className="flex justify-between mb-6">
    {steps.map((step, index) => (
      <div key={index} className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
            index < currentStep
              ? "bg-green-500 text-white border-green-500"
              : index === currentStep
              ? "bg-black text-white border-black"
              : "bg-white text-gray-400 border-gray-300"
          }`}
        >
          {index + 1}
        </div>
        <div className="text-sm mt-2">{step}</div>
      </div>
    ))}
  </div>
  );
};

export default SignupFlow;
