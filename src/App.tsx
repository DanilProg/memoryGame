import {Game} from "./components/Game/Game";
import {Header} from "./components/Header/Header";
import {useState} from "react";
import { Context } from "./hook/contest";


export const App = () => {
    const [difficultyValue, setDifficultyValue] = useState(8)
    return(
        <div className='container'>
            <Header setDifficultyValue={setDifficultyValue}/>
            <main>
                <Context.Provider value={difficultyValue}>
                <Game />
                </Context.Provider>
            </main>
        </div>
    )
}