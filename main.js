document.querySelector('.arrowIMG').onclick = showContent;
document.querySelector('.arrowIMG2').onclick = showContent2;
document.querySelector('.arrowIMG3').onclick = showContent3;
document.querySelector('.arrowIMG4').onclick = showContent4;

function showContent(){

    
    let arrow = document.querySelector('.arrowIMG');
    arrow.classList.toggle("toggleArrow")

    let showAnswer = document.querySelector('.answer');
    showAnswer.classList.toggle("toggleAnswer")

}


function showContent2(){

    
    let arrow = document.querySelector('.arrowIMG2');
    arrow.classList.toggle("toggleArrow2")

    let showAnswer = document.querySelector('.answer2');
    showAnswer.classList.toggle("toggleAnswer2")

}

function showContent3(){

    
    let arrow = document.querySelector('.arrowIMG3');
    arrow.classList.toggle("toggleArrow3")

    let showAnswer = document.querySelector('.answer3');
    showAnswer.classList.toggle("toggleAnswer3")

}

function showContent4(){

    
    let arrow = document.querySelector('.arrowIMG4');
    arrow.classList.toggle("toggleArrow4")

    let showAnswer = document.querySelector('.answer4');
    showAnswer.classList.toggle("toggleAnswer4")

}

