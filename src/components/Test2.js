import React,{useState} from 'react'

const Test = () => {
  const [i,setI]=useState(0);
  const [checked,setChecked]=useState(false);
  const [selected,setSelected]=useState('');
  const [score,setScore]=useState(1);
    const questions = [
        {
          question: 'HTML is what type of language ?',
          answers: ['Programming Language','Markup Language','Scripting Language']
        },
        {
          question: 'HTML web pages can be read and rendered by _________.',
           answers: ['Compiler','Server','Web Browser']
        },
        {
          question: 'How can you make a bulleted list with numbers?',
          answers:[ '<dl>','<ol>','<ul>']
        },
        {
          question: 'What is the correct JavaScript syntax to write "Hello World"?',
         answers:['document.write("Hello World")','response.write("Hello World")','println ("Hello World")']
        },
        {
          question: 'What is meant by "this" keyword in javascript?',
           answers:['It referes previous object','It is variable which contains value','It refers current object']
        },
      ];
      const correct=['Markup Language','Web Browser','<ol>','document.write("Hello World")','It refers current object']
      const [array,setArray]=useState(questions);
      const press=()=>{
       
        if(i<questions.length-1)
        setI(i+1);
        //alert(selected);
        setChecked(false);

        if(correct.includes(selected))
        setScore(score+1);

        if(i==questions.length-1){
           window.name=score;
           window.location.href='/last';
          }
    }
    const ch=(e)=>{
     setSelected(e.target.value);
      setChecked(!checked);
    }
    function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          display.textContent = minutes + ":" + seconds;
  
          if (--timer < 0) {
            clearInterval();
            window.location.href='/last'
          }
      }, 1000);
  }
  
  window.onload = function () {
      var minute = 60 * 1,
          display = document.querySelector('#time');
      startTimer(minute, display);
  };
  
    return (
        <div  className="container" >
             
                  
            <label style={{fontSize:'20px',color:'white'}} ><strong> {array[i].question} </strong> </label><br/><br/>
           
            <div>
            <form>
              {array[i].answers?array[i].answers.map((ans,ind)=>(
                <div key={ind} className="item" >
                
              <input type="radio" name="choices" value={ans} id="rad" checked={checked} onChange={ch}/> 
              <label style={{textAlign:'left'}} > {ans} </label>
             
             <br/>
             </div>
              )):''}
             <br/>
             </form>
             </div>
            
            <button onClick={press} className="btn" >next</button>
<br/>
       <label style={{fontSize:'20px',color:'white'}}>Remaining time: <span id="time">01:00</span>  </label> 
               
        </div>
    )
}

export default Test
