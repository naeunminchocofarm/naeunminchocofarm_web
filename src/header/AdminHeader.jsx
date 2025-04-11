import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { routesLink } from "../routes/routesLink";
import { BsMenuButton } from "react-icons/bs";

const AdminHeader = () => {
 const [isOpen, setIsOpen] = useState(false);
   // 웹용 메뉴 
   // 절대 경로 생성 함수>2depth를쓸거니깐
   const getWebAbsolutePath = (path) => {
     return path.startsWith("/admin") ? path : `/admin/${path}`;
   };
 
   // 웹 메뉴용 링크 필터링
   const webMenuLinks = routesLink
     .filter(
       (route) =>
         route.layout === "admin" &&
         route.title !== "home" &&
         route.title !== "-"
     )
     .map((route) => ({
       title: route.title,
       path: getWebAbsolutePath(route.path),
     }));
  
   return (
     <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
       <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
         <h1 className="text-xl font-bold text-green-600">
           <NavLink to="/web">나은민초코팜</NavLink>
         </h1>
 
         {/* Desktop 메뉴 */}
         <nav className="hidden md:flex space-x-6">
           {webMenuLinks.map(({ path, title }) => (
             <NavLink
               key={path}
               to={path}
               className={({ isActive }) =>
                 isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
               }
             >
               {title}
             </NavLink>
           ))}
             <NavLink>
             로그아웃
           </NavLink>
         </nav>
 
         {/* 모바일 메뉴 토글 */}
         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
           <BsMenuButton/>
         </button>
       </div>
 
       {/* 모바일 메뉴 */}
       {isOpen && (
         <nav className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
           {webMenuLinks.map(({ path, title }) => (
             <NavLink
               key={path}
               to={path}
               className="block hover:text-green-600"
               onClick={() => setIsOpen(false)}
             >
               {title}
             </NavLink>
           ))}
           <NavLink>
             로그아웃
           </NavLink>
         </nav>
       )}
     </header>
  );
};

export default AdminHeader;
