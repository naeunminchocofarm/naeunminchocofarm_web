export default function NotFound() {
  const titleCss = "text-4xl font-bold mb-5";
  const containerCss = "mx-auto w-fit h-screen flex flex-col justify-center";
  return (
    <>
      <div className={containerCss}>
        <h1 className={titleCss}>Not Found</h1>
        <p>페이지를 찾지 못했습니다.</p>
      </div>
    </>
  );
}