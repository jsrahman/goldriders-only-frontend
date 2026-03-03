import React, { useState } from "react";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import RegisterWarning from "./RegisterWarning";

const Register = ({ isClose, setIsClose }) => {
  const [steps, setSteps] = useState(1);
  const [bonusType, setBonusType] = useState(1);

  if (isClose) {
    return <RegisterWarning setIsClose={setIsClose} />;
  }
  if (steps === 1) {
    return (
      <StepOne
        bonusType={bonusType}
        setBonusType={setBonusType}
        setSteps={setSteps}
      />
    );
  }
  if (steps === 2) {
    return <StepTwo bonusType={bonusType} setSteps={setSteps} />;
  }
  if (steps === 3) {
    return <StepThree bonusType={bonusType} setSteps={setSteps} />;
  }
};

export default Register;