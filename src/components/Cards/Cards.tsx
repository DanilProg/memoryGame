import {Card} from "../Card/Card"
import './Cards.css'
import {useContext, useEffect, useState} from "react"
import {Modal} from "../Modal/Modal"
import {createPortal} from "react-dom"
import {generationArray} from "../utils";
import classNames from "classnames";
import {Context} from "../../hook/contest";
import {ModalStatistic} from "../ModalStatistic/ModalStatistic";
import {ModalRestart} from "../ModalRestart/ModalRestart";
import {Portal} from "../Portal/Portal";

export interface PropsCards {
    setStep: ((prevState: (step: number) => number) => void);
    step: number;

}

interface CardObject {
    id: number;
    value: number;

}

let timerID: ReturnType<typeof setTimeout>
export const Cards = ({setStep, step}: PropsCards) => {
    const [cards, setCards] = useState<CardObject[]>([])
    const [openCard, setOpenCard] = useState<CardObject[]>([])
    const [exitValue, setExitValue] = useState<CardObject[]>([])
    const difficultyValue = useContext(Context)
    const wrapperClasses = classNames('cards',
        {
            'cards-easy': difficultyValue === 8,
            'cards-medium': difficultyValue === 12,
            'cards-hard': difficultyValue === 16
        }
    )
    const startGame = () => {
        setOpenCard([])
        setExitValue([])
        setStep(() => 20)
        arrayRandom(difficultyValue)
    }
    useEffect(() => {
        startGame()
    }, [])
    useEffect(() => {
        startGame()
    }, [difficultyValue])
    const updateCard = (value: CardObject) => {
        if (openCard.length >= 2) {
            clearTimeout(timerID)
            setOpenCard([])
        }
        if (openCard[0]?.id === value.id) {
            console.log('Пошел нахуй')
        } else {
            setStep((prevState: number) => {
                return prevState + 1
            })
            setOpenCard((prevState: CardObject[]) => {
                return [...prevState, value]
            })
        }
    }
    const arrayRandom = (value: number) => {
        /*const arrayCard = Array.from({length: value}, () => Math.floor(Math.random() * 100))*/
        const arrayCard = generationArray(value)
        setCards([...arrayCard, ...arrayCard].sort(() => Math.random() - 0.5).map((value) => {
            return {value, id: Math.random() * 100}
        }))
    }
    useEffect(() => {
        if (openCard.length === 2) {
            if (openCard[0].value === openCard[1].value) {
                setExitValue([...exitValue, openCard[0], openCard[1]])
            } else {
                timerID = setTimeout(() => {
                    setOpenCard([])
                }, 1500)
            }
        }
    }, [openCard])

    return (
        <>
            <div className={wrapperClasses}>
                {
                    cards.map((value: CardObject) =>
                        <Card key={value.id}
                              value={value.value}
                              updateCard={() => updateCard(value)}
                              show={Boolean(openCard.find((cardObject) => cardObject.id === value.id))}
                              exit={Boolean(exitValue.find((exit) => exit.id === value.id))}
                              step={step}
                        />)
                }
            </div>
            {
                step >= 40 || exitValue.length === 16 ?
                    <Portal>
                        <ModalRestart startGame={startGame}
                                      step={40 - step}
                                      unsolved={(cards.length - exitValue.length) / 2}
                                      open={exitValue.length / 2}/>
                    </Portal>
                    :
                    ""

            }


        </>

    );
};