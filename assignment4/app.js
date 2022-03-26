const questions = document.querySelectorAll(".container");
questions.forEach(function(question){
    const buttons = question.querySelector(".question-button");
    console.log("buttons",buttons);

    buttons.addEventListener("click",function(){
        questions.forEach( function(event){
            console.log("event",event)
            if(event!==question){
                event.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
    
});