export default function CurrentSunshine({ currentSunshine }) {
  return (
    <div className="text-2xl font-bold text-center">
      <p>일조량</p>
      {currentSunshine}
    </div>
  );
}
