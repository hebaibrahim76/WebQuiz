import React from 'react'
import iq from '../iq.jpg'
const Main = () => {
    const press=()=>{
        window.name=0;
        window.location.href='/test';
    }
    return (
        <div >
            <h1 style={{color:'white'}} >
            <p>
                You will be having a Multiple Choice Quiz once you click on the button below
                </p>
                <p>
                You have 1 minute to finish
                </p>
                Good Luck!
            </h1>
            <button onClick={press} className="btn" >Start Quiz</button>
        </div>
    )
}

export default Main
