import React, { useState } from 'react';
import { AppShell, Container } from '@mantine/core';
import './App.css';

// 画像のインポート
import toRight1 from './assets/images/toRight1.png';
import toRight2 from './assets/images/toRight2.png';
import thisWay1 from './assets/images/thisWay1.png';
import notThisWay1 from './assets/images/notThisWay1.png';

// コンポーネントのインポート
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';

// ユーティリティのインポート
import { shuffleArray } from './utils/shuffle';

// データのインポート
import { questions } from './data/questions';

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
  const NUM_QUESTIONS = 10;

  const startQuiz = () => {
    // 問題をシャッフルして2問選択
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
    <AppShell>
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
    </AppShell>
  );
}

export default App;
