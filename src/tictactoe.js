import { useState } from "react";
import Confetti from 'react-confetti'

export function TicTacToe(){
    return(
        <div>
        <h1>Fun game</h1>
       <Board/>
        </div>
    )
}

function Board(){
    const[board,setBoard] = useState([null,null,null,null,null,null,null,null,null]);
    const [isXturn,setIsXTurn] = useState(true);
    const decideWinner = (board) =>{
        const lines = [
            [0,1,2],
            [3,4,6],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ];

        for (let i=0;i<lines.length;i++){
            const [a, b, c] = lines[i];
            if( board[a]!==null && board[a]===board[b] && board[b]===board[c]){
                console.log("winner",board[a]);
                return board[a];
        }
    }
    return null;
}
const winner = decideWinner(board);
    const handleClick = (index)=>{
        if(winner==null && !board[index]){
        const boardCopy = [...board];
        boardCopy[index] = isXturn? "X":"O";
        setBoard(boardCopy);
        setIsXTurn(!isXturn)
        } 
    }   
    const handleReset =() => {
        setIsXTurn(true);
        setBoard([null,null,null,null,null,null,null,null,null])
    }
    return(
        <div className="Board">
        {board.map((val,index) =>   <Gamebox val={val} key={index} onPlayerClick ={()=>{handleClick(index)}} />)} 
        <div className="board-text">
     <p className="winner">The winner is : <span>{winner}</span></p>
   {winner?  <Confetti />:""}
   { isXturn? <p>X turn</p>: <p>O turn</p>}
     <button className="reset" onClick={handleReset}> Reset</button>
     </div> 

        </div>
    )
}
function Gamebox({val,onPlayerClick}){
     const styles = {
        color: val === "X" ? "green" :"red",
    }
    return(
        <div className="gamebox" style={styles} onClick={onPlayerClick}>{val} 
        
        </div>
    )
}