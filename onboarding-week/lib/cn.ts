import clsx from "clsx";

export const cn = (...classes: (string | undefined | false)[]) => {
  return clsx(...classes);
};
