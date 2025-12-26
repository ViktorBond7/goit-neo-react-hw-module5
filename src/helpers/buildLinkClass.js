import clsx from "clsx";

export const buildLinkClass = ({ isActive, css }) =>
  clsx(css.link, isActive && css.active);
