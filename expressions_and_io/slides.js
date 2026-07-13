// ═══════════════════════════════════════
// Slide Navigation & Quiz Engine
// ═══════════════════════════════════════

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const progressBar = document.getElementById('progressBar');
const slideCounter = document.getElementById('slideCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
    currentSlide = index;
    progressBar.style.width = ((index + 1) / totalSlides * 100) + '%';
    slideCounter.textContent = (index + 1) + ' / ' + totalSlides;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === totalSlides - 1;
}

function changeSlide(dir) {
    const next = currentSlide + dir;
    if (next >= 0 && next < totalSlides) showSlide(next);
}

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); changeSlide(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); changeSlide(-1); }
});

showSlide(0);

// ═══════════════════════════════════════
// Quiz Engine
// ═══════════════════════════════════════
let currentQuestion = 0;
let quizScore = 0;
let answered = false;

function renderQuestion() {
    const container = document.getElementById('quizContainer');
    const q = quizData[currentQuestion];
    const fill = document.getElementById('quizProgressFill');
    const tracker = document.getElementById('quizScoreTracker');

    fill.style.width = ((currentQuestion) / quizData.length * 100) + '%';
    tracker.textContent = `Question ${currentQuestion + 1} of ${quizData.length}  •  Score: ${quizScore}/${currentQuestion}`;
    answered = false;

    let html = `
        <div class="quiz-question-card">
            <div class="quiz-q-number">Question ${currentQuestion + 1} of ${quizData.length}</div>
            <div class="quiz-q-text">${q.question}</div>
            <div class="quiz-options">
    `;
    q.options.forEach((opt, i) => {
        html += `<button class="quiz-option" data-index="${i}" onclick="selectAnswer(${i})">${opt}</button>`;
    });
    html += `
            </div>
            <div class="quiz-explanation" id="quizExplanation">💡 ${q.explanation}</div>
            <button class="quiz-next-btn" id="quizNextBtn" onclick="nextQuestion()">
                ${currentQuestion < quizData.length - 1 ? 'Next Question →' : 'See Results 🎉'}
            </button>
        </div>
    `;
    container.innerHTML = html;
}

function selectAnswer(index) {
    if (answered) return;
    answered = true;

    const q = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.quiz-option');

    buttons.forEach((btn, i) => {
        btn.style.pointerEvents = 'none';
        if (i === q.correct) btn.classList.add('correct');
        if (i === index && index !== q.correct) btn.classList.add('wrong');
        if (i !== q.correct && i !== index) btn.style.opacity = '0.4';
    });

    if (index === q.correct) quizScore++;

    document.getElementById('quizExplanation').classList.add('show');
    document.getElementById('quizNextBtn').classList.add('show');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizProgressFill').style.width = '100%';
    document.getElementById('quizScoreTracker').textContent = 'Quiz Complete!';

    const pct = Math.round((quizScore / quizData.length) * 100);
    let msg = '', color = '';
    if (pct >= 90) { msg = '🌟 Outstanding! You have excellent knowledge of computer organisation.'; color = 'var(--success)'; }
    else if (pct >= 70) { msg = '👏 Well done! You have a strong understanding. Review the topics you missed.'; color = 'var(--accent-4)'; }
    else if (pct >= 50) { msg = '📖 Good effort! Revisit the slides to strengthen your knowledge.'; color = 'var(--warning)'; }
    else { msg = '💪 Keep studying! Go through the slides again and retry the quiz.'; color = 'var(--error)'; }

    const results = document.getElementById('quizResults');
    results.style.display = 'block';
    results.innerHTML = `
        <h2 class="slide-title" style="font-size:2rem;">Quiz Results</h2>
        <div class="quiz-score-circle" style="border-color:${color};">
            ${quizScore}/${quizData.length}
            <small>${pct}%</small>
        </div>
        <p class="quiz-result-msg">${msg}</p>
        <button class="quiz-retry-btn" onclick="retryQuiz()">🔄 Retry Quiz</button>
    `;
}

function retryQuiz() {
    currentQuestion = 0;
    quizScore = 0;
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    renderQuestion();
}

// Initialize quiz when quiz slide is first shown
const observer = new MutationObserver(() => {
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        const quizSlide = quizContainer.closest('.slide'); // Dynamically find the slide containing the quiz
        if (quizSlide && quizSlide.classList.contains('active') && !document.querySelector('.quiz-question-card')) {
            renderQuestion();
        }
    }
});
observer.observe(document.getElementById('slideshow'), { subtree: true, attributes: true, attributeFilter: ['class'] });
