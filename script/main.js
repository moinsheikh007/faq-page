const plusBtn = document.querySelectorAll('.bx-plus');
const questionAns = document.querySelectorAll('.question-ans')

plusBtn.forEach(btn => {
    btn.addEventListener('click', function (event) {
        const btnElement = event.currentTarget;
        const ans = btnElement.parentElement.parentElement.nextElementSibling;
        ans.classList.toggle('openAns')
    })
})

/* const questionAns = document.querySelectorAll('.question-ans')

const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    const btn = question.querySelector('.bx-plus');
    btn.addEventListener('click', function(event) {
        const ans = event.currentTarget;
        console.log(ans)
    })
}) */