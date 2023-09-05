import React, {FC} from 'react';
import './Modal.css'
interface PropsModal {
    finishGame:() => void;
    step: number;
    unsolved: number;
    open: number;
}
export const Modal:FC<PropsModal> = ({finishGame, open,unsolved,step}) => {
    return (
        <div className='modal'>
            <button className='button' onClick={finishGame}>Перезапустить игру</button>
            <div>
                <div>Шагов осталось: {step}</div>
                <div>Не разгаданных карт: {unsolved}</div>
                <div>Раскрытых карт: {open}</div>
            </div>

        </div>
    );
};