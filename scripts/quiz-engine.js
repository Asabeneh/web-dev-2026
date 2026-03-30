const quizForms = document.querySelectorAll('.quiz-form')

quizForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const questions = [...new Set(Array.from(form.querySelectorAll('input[type="radio"]')).map((input) => input.name))]
        let score = 0

        questions.forEach((questionName) => {
            const selected = form.querySelector(`input[name="${questionName}"]:checked`)
            if (selected && selected.dataset.correct === 'true') {
                score += 1
            }
        })

        const total = questions.length
        const percentage = Math.round((score / total) * 100)
        const quizName = form.dataset.quizName || 'Quiz'
        const result = form.querySelector('.quiz-result')

        result.classList.remove('quiz-pass', 'quiz-try-again')
        if (percentage >= 80) {
            result.classList.add('quiz-pass')
            result.textContent = `${quizName} score: ${score}/${total} (${percentage}%). Excellent work.`
        } else {
            result.classList.add('quiz-try-again')
            result.textContent = `${quizName} score: ${score}/${total} (${percentage}%). Review the concept and try again.`
        }
    })
})
