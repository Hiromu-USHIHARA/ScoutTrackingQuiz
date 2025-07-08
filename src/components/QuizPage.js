import React from 'react';
import { Title, Text, Button, Image } from '@mantine/core';

const QuizPage = ({
  currentQuestion,
  questions,
  shuffledOptions,
  score,
  showAnswer,
  selectedAnswer,
  showResult,
  isCorrect,
  onAnswer,
  onNextQuestion
}) => (
  <>
    <Title order={1} align="center" mb="xl">
      ボーイスカウト追跡サインクイズ
    </Title>
    
    <Text size="lg" align="center" mb="xl">
      スコア: {score}
    </Text>

    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <Image
        src={questions[currentQuestion].image}
        alt="追跡サイン"
        height="clamp(80px, 15vh, 150px)"
        fit="contain"
        style={{ margin: '0 auto' }}
      />
    </div>

    {showAnswer && (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button
          size="lg"
          onClick={onNextQuestion}
          style={{
            width: '300px',
            height: '80px',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}
        >
          {currentQuestion === questions.length - 1 ? '結果を見る' : '次の問題'}
        </Button>
      </div>
    )}

    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center',
      gap: '1rem',
      marginTop: '2rem',
      flexWrap: 'wrap'
    }}>
      {shuffledOptions.map((option, index) => (
        <Button
          key={index}
          size="lg"
          variant="filled"
          color={showAnswer ? 
            (option === questions[currentQuestion].correctAnswer ? 'green' : 
            (selectedAnswer === option && selectedAnswer !== questions[currentQuestion].correctAnswer ? 'red' : 'gray')) : 
            'blue'}
          onClick={() => !showAnswer && onAnswer(option)}
          disabled={showAnswer}
          style={{ 
            width: '200px',
            height: '60px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            opacity: showAnswer && option !== questions[currentQuestion].correctAnswer && selectedAnswer !== option ? 0.5 : 1,
            transition: 'all 0.3s ease',
            backgroundColor: showAnswer && option === questions[currentQuestion].correctAnswer ? '#40C057' : undefined
          }}
        >
          {option}
        </Button>
      ))}
    </div>

    {showAnswer && (
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem auto 0 auto'
      }}>
        <span style={{
          fontSize: 'min(10rem, 30vw, 30vh)',
          lineHeight: '1',
          color: isCorrect ? '#40C057' : '#FA5252',
          maxWidth: '90vw',
          wordBreak: 'break-all'
        }}>
          {isCorrect ? '○' : '×'}
        </span>
      </div>
    )}
  </>
);

export default QuizPage; 