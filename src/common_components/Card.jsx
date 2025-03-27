export default function Card({ children, className = "" }) {
  const cardCss = `rounded-xl bg-red-50 p-4 w-fit ${className}`;

  return (
    <>
      <div className={cardCss}>{children}</div>
    </>
  );
}
