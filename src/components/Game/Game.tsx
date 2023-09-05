import React, {useState} from 'react';
import {StepLimit} from "../StepLimit/StepLimit";
import {Cards} from "../Cards/Cards";
type StepType = {
    step: number;
    setStep: () => number;
}
export const Game = () => {
    const [step, setStep]:any = useState (0)
    return (
        <div className='main'>
            <StepLimit children={'Шагов сделано'} step={step}/>
            <Cards setStep={setStep} step={step}/>
            <StepLimit children={"Шагов осталось"} step={40 - step}/>
        </div>
    );
};