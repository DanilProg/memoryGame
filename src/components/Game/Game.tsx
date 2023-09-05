import React, {useState} from 'react';
import {StepLimit} from "../StepLimit/StepLimit";
import {Cards} from "../Cards/Cards";

export const Game = () => {
    const [step, setStep] = useState (0)
    return (
        <div className='main'>
            <StepLimit children={'Шагов сделано'} step={step}/>
            <Cards setStep={setStep} step={step}/>
            <StepLimit children={"Шагов осталось"} step={40 - step}/>
        </div>
    );
};