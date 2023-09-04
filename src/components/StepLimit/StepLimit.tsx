import React, {FC, useState} from "react";
interface PropsStepLimit {
    children: React.ReactNode;
    step: number;
}
export const StepLimit:FC<PropsStepLimit> = ({children, step}) => {

    return (
        <div>
            {children}
            <h2>{step}</h2>
        </div>
    );
};

