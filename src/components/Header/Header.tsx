import './Header.css'
import {useState} from "react";
import {ModalStatistic} from "../ModalStatistic/ModalStatistic";
import {Portal} from "../Portal/Portal";
export interface DifficultyProps {
    setDifficultyValue: (value:number) => void;
}

export const Header = ({setDifficultyValue}:DifficultyProps) => {
    const difficulty = [{name: 'easy', value: 8}, {name: 'medium', value: 12}, {name: 'hard', value: 16}]
    const [modalStatistic, setModalStatistic] = useState(false)
    return (
        <header className='header'>
            {
                difficulty.map((diff, index) =>
                    <button className={'btn'} key={index}
                            onClick={() => setDifficultyValue(diff.value)}>{diff.name}</button>)
            }
            <button className='btn' onClick={() => setModalStatistic(!modalStatistic)}>Статистика</button>
            {

                modalStatistic ?
                    <Portal><ModalStatistic modalStatistic={modalStatistic} setModalStatistic={setModalStatistic}/></Portal>
                    :
                    ''
            }
        </header>

    );
};
