const startButton=document.getElementById('start-btn')
const questionContainerElement=document.getElementById('question-container')
const displayQuestion=document.getElementById('questions');
const displayOptions=document.getElementById('answer-buttons')
startButton.addEventListener('click',startGame)
const button = document.getElementsByClassName("btn")
const bodyContainer = document.body;
const nextButton=document.getElementById('next-btn')


let count=0;
function startGame(){
    nextButton.innerHTML="NEXT"
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    nextButton.classList.remove('hide')
    selectAnswer();
    nextQuestion(); 

}


function selectAnswer(){

        for(let j=0;j<4;j++){
            displayQuestion.innerText=questions[count].question;
            button[j].innerHTML=questions[count].answer[j].text;
            button[j].addEventListener('click',function(){
            let value=questions[count].answer[j].correct;
            console.log(value)
            if(value){
                bodyContainer.classList.add('correct');
                button[j].classList.add('correct');
                button[j].classList.remove('neutral')
                bodyContainer.classList.remove('neutral')
                bodyContainer.classList.remove('wrong');
                button[j].classList.remove('wrong');
            }else{
                bodyContainer.classList.remove('correct');
                button[j].classList.remove('correct');
                bodyContainer.classList.add('wrong');
                button[j].classList.add('wrong');
                button[j].classList.remove('neutral')
                bodyContainer.classList.remove('neutral')
            }
     
            }
        )
    } 
}
function nextQuestion(){
    nextButton.addEventListener('click',function(){
        count++;
        if(count===questions.length){
            count=0;
            location.reload();
            startGame();
        }
        if(count===questions.length-1){
            nextButton.innerHTML="Restart";
            
        }
        selectAnswer();
        bodyContainer.classList.add('neutral')
        for(let i=0;i<button.length;i++){
            button[i].classList.add('neutral');
        }
     
    })
}


const questions=[
    {
        question:"What is the result for 4+4",
        answer:[
            {text:'0', correct:false},
            {text:'1',correct:false},
            {text:'8',correct:true},
            {text:'3',correct:false}
            
        ]
    },
    {
        question:"What is the result for 10+5",
        answer:[
            {text:'4', correct:false},
            {text:'5',correct:false},
            {text:'6',correct:false},
            {text:'15',correct:true}
            
        ]
    },
    {
        question:"What is the result for 7+5",
        answer:[
            {text:'8', correct:false},
            {text:'9',correct:false},
            {text:'12',correct:true},
            {text:'11',correct:false}
            
        ]
    },
    {
        question:"What is the capital of India",
        answer:[
            {text:'Delhi', correct:true},
            {text:'Mumbai',correct:false},
            {text:'Banglore',correct:false},
            {text:'Chennai',correct:false}
            
        ]
    }
]
