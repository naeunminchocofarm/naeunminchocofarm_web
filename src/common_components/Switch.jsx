import { useState } from "react";

export default function Switch({ children, className = "" }) {
  const switchCheckbox = `relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 ${className}`;

  //체크 여부
  const [checked, setchecked] = useState(false);
  return (
    <>
      <label className="inline-flex flex-row items-center cursor-pointer">
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {checked ? "ON" : "OFF"}
        </span>
        <input
          type="checkbox"
          value=""
          checked={checked}
          className="sr-only peer"
          onChange={() => {
            setchecked(!checked);
          }}
        />
        {/* 버튼 영역 div */}
        <div className={switchCheckbox}></div>
        {/* 글자영역 */}
      </label>
    </>
  );
}
