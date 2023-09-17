import {createPortal} from "react-dom";
import {FC, ReactNode} from "react";
interface PortalProps {
    children:ReactNode;
}
export const Portal:FC<PortalProps> = ({children}) => {
  return(
      <div>
          {createPortal(children, document.body)}
      </div>
  )
}