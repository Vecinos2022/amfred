import React, { ReactNode } from "react";
import {cn} from "@nextui-org/react";

interface IconWrapperProps {
    children: ReactNode,
    className: string
}

export const IconWrapper = ({ children , className } : IconWrapperProps) => (
  <div className={cn(className, "flex items-center rounded-small justify-center w-9 h-9")}>
    { children }
  </div>
);