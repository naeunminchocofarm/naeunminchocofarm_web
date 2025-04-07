import React, { useState } from 'react';
import { Link } from "react-router-dom";

const WebHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-green-600">
          <Link to="/web">나은민초코팜</Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/company" className="hover:text-green-600">회사소개</Link>
          <Link to="/about-smartfarm" className="hover:text-green-600">스마트팜이란?</Link>
          <Link to="/business" className="hover:text-green-600">사업소개</Link>
          <Link to="/apply" className="hover:text-green-600">스마트팜신청</Link>
        </nav>

        {/* 로그인/회원가입 */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">
              로그인
            </button>
          </Link>
          <Link to="/signup" className="text-gray-500 hover:text-green-600 text-sm">
            회원가입
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <Link to="/company" className="block hover:text-green-600">회사소개</Link>
          <Link to="/about-smartfarm" className="block hover:text-green-600">스마트팜이란?</Link>
          <Link to="/business" className="block hover:text-green-600">사업소개</Link>
          <Link to="/apply" className="block hover:text-green-600">스마트팜신청</Link>
          <Link to="/login" className="block text-green-600 font-semibold">로그인</Link>
          <Link to="/signup" className="block text-gray-500 hover:text-green-600">회원가입</Link>
        </nav>
      )}
    </header>
  );
};

export default WebHeader;
