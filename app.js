function handleForm(event) {
    "use strict";

    //prevent form from submitting
    event.preventDefault();

    //q1 - q5 radios
    //results display area
    //total questions
    //total correct answers
    var q1 = document.forms.quiz.q1.value,
        q2 = document.forms.quiz.q2.value,
        q3 = document.forms.quiz.q3.value,
        q4 = document.forms.quiz.q4.value,
        q5 = document.forms.quiz.q5.value,
        results = document.querySelector('.results'),
        total = 5,
        correctAnswer = 0;

    //correct answer list
    var a1 = 'a',
        a2 = 'c',
        a3 = 'b',
        a4 = 'b',
        a5 = 'a';

    //correct answers IDs
    var q1a = document.querySelector('#q1a').parentElement,
        q2c = document.querySelector('#q2c'),
        q3b = document.querySelector('#q3b'),
        q4b = document.querySelector('#q4b'),
        q5a = document.querySelector('#q5a');
    
    for (let i = 0; i < total; i++) {
        if (eval('q' + (i + 1)) === '') {                                           // If empty
            alert('You missed question ' + (i + 1));
        } else if (eval ('q' + (i + 1)) === eval('a' + (i + 1))) {                  // If correct
            console.log('q'+i + ' is correct');
            correctAnswer++;
        } else {                                                                    // If incorrect
            console.log('q'+i + ' is incorrect');
        }
    } // end of for loop
    
    //update the score
    results.firstChild.nextSibling.innerHTML = correctAnswer;
    //show result area
    results.style.display = 'inline-block';

} // end of handleForm

