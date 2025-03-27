export default function Card({ children, className = "" }) {
  const cardCss = `rounded-xl bg-white shadow-md p-4 w-full ${className}`;

  return (
    <>
      <div className={cardCss}>{children}</div>
    </>
  );
}
