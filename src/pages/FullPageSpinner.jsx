import { BsTruck } from "react-icons/bs";

const FullPageSpinner = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#f5f2e9]">
      <div
        className="relative w-32 h-32 rounded-full border-[4px] border-dashed flex items-center justify-center"
        style={{
          borderColor: "#a9745f",
          animation: "spin 3s linear infinite",
        }}
      >
        <BsTruck className="text-green-700 text-4xl absolute -top-2 rotate-[-10deg]" />
      </div>
      <p className="mt-4 text-[#5c4033] text-lg font-semibold">
        나은민팜이 준비 중입니다...
      </p>
    </div>
  );
};

export default FullPageSpinner;
