export default function CurrentHumidity({ currentHumidity }) {
  //가상 현재 습도 데이터

  return (
    <>
      <div className="text-2xl font-bold text-center">
        <p>현재 습도</p> 
        {currentHumidity}%
      </div>
    </>
  );
}
