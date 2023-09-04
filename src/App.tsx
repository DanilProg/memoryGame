import {useState} from "react";
import {Cards} from "./components/Cards/Cards";
import {StepLimit} from "./components/StepLimit/StepLimit";
import {Modal} from "./components/Modal/Modal";

export const App = () => {
    const [step, setStep]:any = useState(40)
    return(
        <div className='container'>
            <main className='main'>
                <StepLimit children={'Шагов сделано'} step={step}/>
                <Cards setStep={setStep} step={step}/>
                <StepLimit children={"Шагов осталось"} step={40 - step}/>
            </main>
        </div>
    )
}