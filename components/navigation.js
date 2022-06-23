import { Link } from "react-scroll";

export const MyNav = ({ to, onSetActive, extendClass, children }) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    duration={1000}
    onSetActive={onSetActive}
    className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${extendClass}`}
  >
    {children}
  </Link>
);

export const MyNavMobile = ({ to, onSetActive, extendClass, children }) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    duration={1000}
    onSetActive={onSetActive}
    className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ${extendClass}`}
  >
    {children}
  </Link>
);
