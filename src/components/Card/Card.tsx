import './Card.css'
import {FC} from "react";

interface PropsCard {
    value:number;
    updateCard:any;
    show: boolean;
    exit:boolean;
    step: number;
}


export const Card:FC<PropsCard> = ({value, updateCard, show, exit, step}) => {

    return (
        <div className={exit || step >=40 ? 'card__none' : show ? 'card-active' : 'card'} onClick={updateCard}>
            <h3>{show ? value : ''}</h3>
        </div>
    );
};
