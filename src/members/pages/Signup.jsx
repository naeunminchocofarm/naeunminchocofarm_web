import React from "react";
import SignupFlow from "../components/SignupFlow";

const Signup = () => {
  // const [step, setStep] = useState(1);
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  //   confirmPassword: "",
  //   name: "",
  //   email: "",
  //   phone: "",
  //   region: "",
  //   isOperating: "",
  //   agreement: false,
  // });

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  // const nextStep = () => setStep((prev) => prev + 1);
  // const prevStep = () => setStep((prev) => prev - 1);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!formData.agreement) {
  //     alert("개인정보 처리방침에 동의해주세요.");
  //     return;
  //   }
  //   alert("회원가입 완료: " + JSON.stringify(formData, null, 2));
  // };

  return (
    <>
      <SignupFlow/>
    </>
  );
};

export default Signup;
