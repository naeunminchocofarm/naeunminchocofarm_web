import { Link } from "react-router-dom";

export default function CardLink({link, children, className = "" }) {
  const cardCss = `rounded-xl bg-white shadow-md p-4 w-full ${className}`;

  return (
    <>
      <Link to={link} className={cardCss}>{children}</Link>
    </>
  );
}