// import { Eachbox } from "./Eachbox"
import { useState } from "react";
import "./Eachbox.css";
import "./TicTacToe.css"
export const TicTacToe = () => {
    const [turn, setTurn] = useState("X");
    const [eachboxs, setEachBox] = useState(Array(9).fill(""));
    const [winner, setWinner]=useState()
    // const checkForWinner = (square)=>{
    //     let combination = {
    //         rows: [
    //             [0, 1, 2],   
    //             [3, 4, 5],
    //             [6, 7, 8]
    //         ],
    //         colums: [
    //             [0, 3, 6],
    //             [1, 4, 7],
    //             [2, 5, 8]
    //         ],
    //         diagonal: [
    //             [0, 4, 8],
    //             [2, 4, 6]
    //         ]
    //     }
    //     console.log("square", square);
    //     for (let comKey in combination) {
    //         combination[comKey].forEach((ele) => {
    //             console.log(square[ele[0]]);
    //             if(
    //                 square[ele[0]] === "" ||
    //                 square[ele[1]] === "" ||
    //                 square[ele[2]] === "") { }
    //             else if (
    //                 square[ele[0]] === square[ele[1]] &&
    //                 square[ele[1]] === square[ele[2]]
    //             ) {
    //                 setWinner(square[ele[0]])
    //             }
    //         })
    //     }
    // }
    const checkForWinner = (square) => { // this is alternet process which is simple compair to above one
        let combination = [
                    [0, 1, 2],   
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
        ]
        for (let i = 0; i < combination.length; i++){
            const [a, b, c] = combination[i];
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                setWinner(square[a])
            }
        }
        return;
    }
    const handleClick = (num) => {
        let square = [...eachboxs];
        // console.log(square);
        if (square[num] !== "") {
            alert("ALREADY CLICKED");
            return;
        }


        if (turn === "X") {
            square[num] = "X";
            setTurn("O");
        }
        else {
            square[num] = "O";
            setTurn("X");
        }
        setEachBox(square);
        checkForWinner(square);
        // console.log(square);
    }

    const Eachbox = ({num}) => {
        return <td onClick={() => handleClick(num)}> <h1>{ eachboxs[num]}</h1></td>
    }

    return <div>
        <div id="container">
            <h1>Turn { turn}</h1>
            <table >
                <tbody>
                    <tr>
                        <Eachbox num={0} />
                        <Eachbox num={1}/>
                        <Eachbox num={2}/>
                    </tr>
                     <tr>
                        <Eachbox num={3} />
                        <Eachbox num={4}/>
                        <Eachbox num={5}/>
                    </tr>
                     <tr>
                        <Eachbox num={6} />
                        <Eachbox num={7}/>
                        <Eachbox num={8}/>
                    </tr>

                    
                </tbody>
            </table>
            {winner && (<>
                <h1>Winner is {winner}</h1>
                <button onClick={() => {
                    setWinner(null);
                    setEachBox(Array(9).fill(""))
                }}>Play Again</button>
            </>)}
        </div>
    </div>
}