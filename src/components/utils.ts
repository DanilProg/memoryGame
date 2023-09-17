import {PropsCards} from "./Cards/Cards";

interface StartGame extends PropsCards{
    setOpenCard: () => void;
    setExitValue:() => void;
    arrayRandom: any;
}
export const generationArray = (value:number) => {
    return Array.from({length: value}, () => Math.floor(Math.random() * 100))
}