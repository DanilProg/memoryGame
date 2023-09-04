import {Card} from "../Card/Card";
import './Cards.css'
import {useEffect, useState} from "react";
import {Modal} from "../Modal/Modal";

export interface PropsCards {
    setStep: any;
    step: number;
}

let timerID: any
export const Cards = ({setStep, step}: PropsCards) => {
    const [cards, setCards]: any = useState([])
    const [card, setCard]: any = useState([])
    const [exitValue, setExitValue]: any = useState([])
    const finishGame = () => {
        setCard([])
        setExitValue([])
        setStep(0)
        arrayRandom()
        return {step: 40 - step, unsolved: cards.length - exitValue.length, }
    }
    useEffect(() => {
        arrayRandom()
    }, [])
    const updateCard = (value: { id: number; value: number; }) => {

        if (card.length >= 2) {
            clearTimeout(timerID)
            setCard([])
        }
        if (card[0]?.id === value.id) {
            console.log('Пошел нахуй')
        } else {
            setStep((prevState: any) => {
                return prevState + 1
            })
            setCard((prevState: any) => {
                return [...prevState, value]
            })
        }
    }
    const arrayRandom = () => {
        const arrayCard = Array.from({length: 8}, () => Math.floor(Math.random() * 100));
        setCards([...arrayCard, ...arrayCard].sort(() => Math.random() - 0.5).map((value) => {
            return {value, id: Math.random() * 100}
        }))
    }
    useEffect(() => {
        if (card.length === 2) {
            if (card[0].value === card[1].value) {
                setExitValue([...exitValue, card[0], card[1]])
            } else {
                timerID = setTimeout(() => {
                    setCard([])
                }, 1500)

            }
        }
    }, [card])

    return (
        <>
            {step >= 40 ?
                <Modal
                    finishGame={finishGame}
                    step={40 - step}
                    unsolved={(cards.length - exitValue.length) / 2}
                    open={exitValue.length / 2}
                />
                :
                <div className='cards'>
                    {
                        cards.map((value: any, index: any) => <Card key={value.id}
                                                                    value={value.value}
                                                                    updateCard={() => updateCard(value)}
                                                                    show={Boolean(card.find((cardObject: any) => cardObject.id === value.id))}
                                                                    exit={Boolean(exitValue.find((exit: any) => exit.id === value.id))}
                                                                    step={step}
                        />)
                    }
                </div>}

        </>

    );
};