import React, { ReactNode } from "react";

interface HeaderSectionProps {
  children?: ReactNode;
  header?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ children, header }) => {
  return (
    <header className="absolute top-20 left-[4vw] right-[6vw] lg:left-8 lg:right-8">
      <div className="flex text-large font-bold">
        <div>{header}</div>
        <div className="absolute right-0 gap-4 flex">{children}</div>
      </div>
    </header>
  );
};

export default HeaderSection;
