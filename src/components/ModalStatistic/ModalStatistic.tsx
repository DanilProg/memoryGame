import {Modal} from "../Modal/Modal";
import './ModalStatistic.css'
import {useState} from "react";
interface ModalStatisticProps {
    setModalStatistic: (modalStatistic:boolean) => void;
    modalStatistic: boolean;
}
export const ModalStatistic = ({modalStatistic, setModalStatistic}:ModalStatisticProps) => {
    const [statistic, setStatistic] = useState(JSON.parse(localStorage.getItem('gameStatistic') || ''))
    const textStatistic = [
        {title: 'Игр всего:', value: statistic.game},
        {title: 'Игры проигранные:', value: statistic.gameOver},
        {title: 'Игры выигранные:', value: statistic.gameWin},
        {title: 'Все неразгаданные  карты:', value: statistic.unsolved},
        {title: 'Все раскрытые кары:', value: statistic.openCart},
    ]
    return (
        <div className='overlay'>
            <Modal textStatistic={textStatistic.map((statistic, index) => <div className={'text'} key={index}>{statistic.title} {statistic.value}</div>)}>
                <button className={'btn-close'} onClick={() => setModalStatistic(!modalStatistic)}>Закрыть</button>
            </Modal>
        </div>
    )
}