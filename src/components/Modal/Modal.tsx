import React, {FC, ReactNode} from 'react';
import './Modal.css'
interface PropsModal {
    children: ReactNode;
    textStatistic: ReactNode;
}
export const Modal:FC<PropsModal> = ({children, textStatistic}) => {
    return (
        <div className='modal'>
            {children}
            <div>
                {textStatistic}
            </div>
        </div>
    );
};