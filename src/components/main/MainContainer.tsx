import { ReactNode } from "react";

type MainContainerProps = {
  children?: ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="fixed left-0 right-0 top-[25vh] h-[50vh] min-h-[400px] min-w-screen flex flex-col border-platinum z-0 overflow-hidden">
      {children}
    </div>
  );
}

export default MainContainer;