import { Link } from "react-router-dom";

export default function CardLink({link, title, children, className = "" }) {
  const cardCss = `rounded-xl bg-white shadow-md p-4 w-full ${className}`;
  const FarmBasicTop = ` mb-3 flex justify-between items-center`;
  const FarmBasicTopTitle = ` flex text-sm font-extrabold text-slate-400`;
  const FarmBasicTopMore = `text-xs font-light text-slate-400`;
  const FarmBasicCont = ` flex justify-between items-end`;
  return (
    <>
      <Link to={link} className={cardCss}>
        <div className="FarmBasic">
          <div className={FarmBasicTop}>
            <p className={FarmBasicTopTitle}>{title}</p>
            <p className={FarmBasicTopMore}>자세히 보기 +</p>
          </div>
          <div className="FarmBasicCont">
            <div className={FarmBasicCont}>
              {children}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}