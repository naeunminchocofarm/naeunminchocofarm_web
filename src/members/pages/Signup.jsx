import React, { useState } from "react";
import WebHeader from "../../header/WebHeader";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    phone: "",
    region: "",
    isOperating: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("개인정보 처리방침에 동의해주세요.");
      return;
    }
    alert("회원가입 완료: " + JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <WebHeader />
      <div className="min-h-screen bg-gray-50 pt-20 px-4 flex justify-center items-start">
        <form
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-green-700">회원가입</h1>

          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold">
                1단계: 기본정보 및 연락처
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="username"
                  placeholder="아이디"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="비밀번호 확인"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  name="name"
                  placeholder="이름"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  name="phone"
                  placeholder="전화번호"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold text-green-700">
                2단계: 스마트팜 운영 정보
              </h2>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  스마트팜을 운영 중이신가요?
                </label>
                <div className="space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="isOperating"
                      value="yes"
                      checked={formData.isOperating === "yes"}
                      onChange={handleChange}
                      className="mr-2"
                    />{" "}
                    예
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="isOperating"
                      value="no"
                      checked={formData.isOperating === "no"}
                      onChange={handleChange}
                      className="mr-2"
                    />{" "}
                    아니오
                  </label>
                </div>
              </div>

              {formData.isOperating === "yes" && (
                <div className="mt-4">
                  <label className="block font-semibold text-gray-700 mb-2">
                    운영 지역
                  </label>
                  <input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    placeholder="예: 경북 김천시"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              )}
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold">3단계: 개인정보처리방침</h2>
              <div className="bg-gray-100 p-4 rounded-md h-40 overflow-y-scroll">
                어쩌고 저쩌고 개인정보 처리방침 내용 표시...
              </div>
              <label className="flex items-center">
                <input
                  name="agreement"
                  type="checkbox"
                  checked={formData.agreement}
                  onChange={handleChange}
                  className="mr-2"
                />{" "}
                개인정보 처리방침에 동의합니다.
              </label>
            </>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="text-sm text-gray-500"
              >
                이전
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl"
              >
                다음
              </button>
            ) : (
              <button
                type="submit"
                disabled={!formData.agreement}
                className={`px-4 py-2 rounded-xl ${
                  formData.agreement
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                제출
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
