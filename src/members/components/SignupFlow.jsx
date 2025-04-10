import React, { useState } from 'react'

const SignupFlow = () => {
  const steps = ["약관동의", "본인인증", "회원정보입력", "가입완료"];
  const [currentStep, setCurrentStep] = useState(0); // 0 = 약관동의

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  return (
    <>
        <div className="max-w-xl mx-auto p-6">
          <h3 className="text-3xl font-bold text-center mb-6">회원가입</h3>

          {/* 스텝 표시 */}
          <div className="flex justify-between mb-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2",
                    index < currentStep && "bg-green-500 text-white border-green-500",
                    index === currentStep && "bg-black text-white border-black",
                    index > currentStep && "bg-white text-gray-400 border-gray-300"
                  )}
                >
                  {index + 1}
                </div>
                <div className="text-sm mt-2 text-center whitespace-nowrap">
                  {step}
                </div>
              </div>
            ))}
          </div>

          {/* 스텝별 화면 */}
          {currentStep === 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">이용 약관에 동의해주세요.</h2>
              <div className="h-40 border p-4 overflow-y-scroll bg-gray-50 rounded">여기에 이용 약관 내용...</div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree" className="text-sm">이용약관에 동의합니다.</label>
              </div>
              <div className="flex justify-end">
                <button onClick={nextStep}>다음</button>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">본인인증</h2>
              <p className="text-sm text-gray-500">* 추후 본인인증 방식을 적용할 예정입니다.</p>
              <input type="text" placeholder="전화번호 입력" />
              <button onClick={nextStep}>다음</button>
              <div className="flex justify-start mt-2">
                <button variant="outline" onClick={prevStep}>이전</button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">아이디</label>
                <input type="text" />
              </div>

              <div>
                <label className="text-sm font-medium">비밀번호</label>
                <input type="password" placeholder="영문+숫자+특수문자 포함 10자 이상" />
              </div>

              <div>
                <label className="text-sm font-medium">비밀번호 확인</label>
                <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
              </div>

              <div>
                <label className="text-sm font-medium">이름</label>
                <input type="text" placeholder="홍길동" />
              </div>

              <div>
                <label className="text-sm font-medium">전화번호</label>
                <input type="text" placeholder="홍길동" />
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <label className="text-sm font-medium">이메일</label>
                  <input type="text" placeholder="example" />
                </div>
                
              </div>

              <div className="flex justify-between mt-6">
                <button variant="outline" onClick={prevStep}>이전</button>
                <button onClick={nextStep}>회원가입 완료</button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold">가입이 완료되었습니다 🎉</h2>
              <p className="text-sm text-gray-600">로그인 후 서비스를 이용해주세요.</p>
              <button>로그인 하러가기</button>
            </div>
          )}
        </div>
    </>
  )
}

export default SignupFlow