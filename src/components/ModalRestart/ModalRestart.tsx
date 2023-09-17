import {Modal} from "../Modal/Modal";
import {useEffect} from "react";
import './ModalRestart.css'

interface PropsModalRestart {
    startGame: () => void;
    step: number;
    unsolved: number;
    open: number;
}
export const ModalRestart = ({startGame, open, unsolved, step}: PropsModalRestart) => {
    const textStatistic = [
        {title: 'Шагов осталось:', value: step},
        {title: 'Неразгаданных карт:', value: unsolved},
        {title: 'Раскрытых карт:', value: open}
    ]
    useEffect(() => {
        if (localStorage.length) {
            const rowStatistic = localStorage.getItem('gameStatistic')
            if (rowStatistic) {
                const revealStatistic = JSON.parse(rowStatistic)
                const gameObj = {
                    game: revealStatistic.game + 1,
                    gameWin: unsolved ? revealStatistic.gameWin + 0 : revealStatistic.gameWin + 1,
                    openCart: +revealStatistic.openCart + open,
                    unsolved: revealStatistic.unsolved + unsolved,
                    gameOver: unsolved ? revealStatistic.gameOver + 1 : revealStatistic.gameOver + 0
                }
                localStorage.setItem('gameStatistic', JSON.stringify(gameObj))
            }
        } else {
            const gameStorage = {
                game: unsolved ? 1 : 0,
                gameWin: unsolved ? 0 : 1,
                openCart: open,
                unsolved: unsolved,
                gameOver: unsolved ? 1 : 0
            }
            localStorage.setItem('gameStatistic', JSON.stringify(gameStorage))
        }
    }, [])
    return (
        <div className='overlay'>
            <Modal textStatistic={textStatistic.map((text, index) => <div className={'text'} key={index}>{text.title} {text.value}</div>)}>
                <button className='button' onClick={() => startGame()}>Перезапустить игру</button>
            </Modal>
        </div>
    )
}