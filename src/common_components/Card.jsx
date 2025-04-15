export default function Card({ children, className = "" }) {
  const cardCss = `rounded-xl bg-white shadow-md p-4 ${className}`;

  return (
    <>
      <div className={cardCss}>{children}</div>
    </>
  );
}
