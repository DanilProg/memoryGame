import './Card.css'
import {FC} from "react";
import classNames from "classnames";

interface PropsCard {
    value:number;
    updateCard:() => void;
    show: boolean;
    exit:boolean;
    step: number;
}

/**/
export const Card:FC<PropsCard> = ({value, updateCard, show, exit, step}) => {
    return (
        <div className={classNames({'card-active': exit || show}, 'card')} onClick={updateCard}>
            <h3>{show ? value : '' || exit ? value : ''}</h3>
        </div>
    );
};
