import React from "react";
import cn from "classnames";

const ContentLayout = ({ className = '', children }) => {
  return (
    <div className={cn(["px-5 md:px-8 lg:px-56", className])}>
      {children}
    </div >
  )
}

export default ContentLayout
