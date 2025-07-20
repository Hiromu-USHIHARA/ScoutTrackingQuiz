import { Container } from '@mantine/core';
import { useState } from 'react';
import './App.css';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import StartPage from './components/StartPage';
import { questions } from './data/questions';
import { shuffleArray } from './utils/shuffle';

function App() {
  const [currentPage, setCurrentPage] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const NUM_QUESTIONS = 5;

  const startQuiz = () => {
    // 問題をシャッフルしてNUM_QUESTIONS問選択
    const shuffled = shuffleArray([...questions]).slice(0, NUM_QUESTIONS);
    setSelectedQuestions(shuffled);
    setShuffledOptions(shuffleArray([...shuffled[0].options]));
    setCurrentPage('quiz');
    setCurrentQuestion(0);
    setScore(0);
    setShowAnswer(false);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const nextQuestion = () => {
    if (currentQuestion === selectedQuestions.length - 1) {
      setCurrentPage('result');
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setShuffledOptions(shuffleArray([...selectedQuestions[currentQuestion + 1].options]));
      setShowAnswer(false);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    const correct = answer === selectedQuestions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) {
      setScore(score + 1);
    }
  };

  const backToStart = () => {
    setCurrentPage('start');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <Container size="md" py="xl" className="main-scale">
          {currentPage === 'start' && <StartPage onStart={startQuiz} questions={selectedQuestions} />}
          {currentPage === 'quiz' && (
            <QuizPage
              currentQuestion={currentQuestion}
              questions={selectedQuestions}
              shuffledOptions={shuffledOptions}
              score={score}
              showAnswer={showAnswer}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              isCorrect={isCorrect}
              onAnswer={handleAnswer}
              onNextQuestion={nextQuestion}
            />
          )}
          {currentPage === 'result' && (
            <ResultPage
              score={score}
              questions={selectedQuestions}
              onBackToStart={backToStart}
            />
          )}
        </Container>
      </div>
      <footer className="app-footer">
        <p>
          <a href="https://github.com/Hiromu-USHIHARA/ScoutTrackingQuiz">
            <img src="https://img.shields.io/github/stars/Hiromu-USHIHARA/ScoutTrackingQuiz?style=social" alt="GitHub Repository" />
          </a>
          <br />
          designed by{' '}
          <a href="https://github.com/Hiromu-USHIHARA">Hiromu Ushihara</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
