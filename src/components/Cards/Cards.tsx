import {Card} from "../Card/Card";
import './Cards.css'
import {useEffect, useState} from "react";
import {Modal} from "../Modal/Modal";
import {createPortal} from "react-dom";

export interface PropsCards {
    setStep: any;
    step: number;
}
type CardObject = {
    id:number;
    value:number;
}
let timerID: any;
export const Cards = ({setStep, step}: PropsCards) => {
    const [cards, setCards] = useState <CardObject[]>([])
    const [openCard, setOpenCard] = useState <CardObject[]>([])
    const [exitValue, setExitValue] = useState <CardObject[]>([])
    console.log(openCard)
    const finishGame = () => {
        setOpenCard([])
        setExitValue([])
        setStep(0)
        arrayRandom()
    }
    useEffect(() => {
        finishGame()
    }, [])
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
    const arrayRandom = () => {
        const arrayCard = Array.from({length: 8}, () => Math.floor(Math.random() * 100));
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
            {step >= 40 || exitValue.length === 16 ?
                createPortal(
                    <Modal
                        finishGame={finishGame}
                        step={40 - step}
                        unsolved={(cards.length - exitValue.length) / 2}
                        open={exitValue.length / 2}
                    />,
                    document.body
                )

                :
                <div className='cards'>
                    {
                        cards.map((value:CardObject ) => <Card key={value.id}
                                                                    value={value.value}
                                                                    updateCard={() => updateCard(value)}
                                                                    show={Boolean(openCard.find((cardObject: CardObject) => cardObject.id === value.id))}
                                                                    exit={Boolean(exitValue.find((exit: CardObject) => exit.id === value.id))}
                                                                    step={step}
                        />)
                    }
                </div>}

        </>

    );
};