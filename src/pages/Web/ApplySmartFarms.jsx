import React, { useState } from "react";
import WebHeader from "../../header/WebHeader";

const ApplySmartFarm = () => {
  const [form, setForm] = useState({
    hasFarm: "",
    crops: [],
    otherCrop: "",
    area: "",
    farmCount: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedCrops = [...form.crops];
      if (checked) {
        updatedCrops.push(value);
      } else {
        updatedCrops = updatedCrops.filter(crop => crop !== value);
      }
      setForm({ ...form, crops: updatedCrops });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <>
      <WebHeader/>
      <div className="max-w-2xl mx-auto p-6 bg-green-50 rounded-xl shadow space-y-6">
      <h2 className="text-xl font-bold text-green-700">스마트팜 도입 신청</h2>

      {/* 운영 여부 */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          운영 중인 농장이 있습니까?
        </label>
        <div className="space-x-4">
          <label>
            <input
              type="radio"
              name="hasFarm"
              value="yes"
              checked={form.hasFarm === "yes"}
              onChange={handleChange}
              className="mr-1"
            />
            예
          </label>
          <label>
            <input
              type="radio"
              name="hasFarm"
              value="no"
              checked={form.hasFarm === "no"}
              onChange={handleChange}
              className="mr-1"
            />
            아니오
          </label>
        </div>
      </div>

      {/* 작물 종류 */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">재배 작물 (복수 선택 가능)</label>
        <div className="grid grid-cols-2 gap-2">
          {['상추', '토마토', '방울토마토', '고추', '오이', '기타'].map((crop) => (
            <label key={crop} className="flex items-center">
              <input
                type="checkbox"
                name="crops"
                value={crop}
                checked={form.crops.includes(crop)}
                onChange={handleChange}
                className="mr-2"
              />
              {crop}
            </label>
          ))}
        </div>
      </div>

      {/* 기타 작물 입력 */}
      {form.crops.includes("기타") && (
        <div>
          <label className="block font-medium text-gray-700 mb-1">기타 작물 입력</label>
          <input
            type="text"
            name="otherCrop"
            value={form.otherCrop}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="기타 작물을 입력해주세요"
          />
        </div>
      )}

      {/* 면적 및 농장 수 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">총 재배 면적 (㎡)</label>
          <input
            type="number"
            name="area"
            value={form.area}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">농장 수</label>
          <input
            type="number"
            name="farmCount"
            value={form.farmCount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      {/* 주소 */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">농장 주소</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="예: 경기도 수원시 영통구"
        />
      </div>
    </div>
    </>
  );
};

export default ApplySmartFarm;