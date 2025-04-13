import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  currentStep: 0, // 현재 회원가입 단계
  isVerified: false, // 이메일 인증 여부
  userData: {
    loginId: "",
    password: "",
    confirmPw: "",
    name: "",
    tell: "",
    email: "",
    privacyPolicy: false
  },
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    setAgreed: (state, action) => {
      state.isAgreed = action.payload;
    },
    setVerified: (state, action) => {
      state.isVerified = action.payload;
    },
    updateUserData: (state, action) => {
      state.userData = { ...state.userData, 
                        ...action.payload };
    },
    resetSignup: () => initialState
  },
});

export const {
  nextStep,
  prevStep,
  setAgreed,
  setVerified,
  updateUserData,
  resetSignup,
} = signupSlice.actions;

export default signupSlice.reducer;