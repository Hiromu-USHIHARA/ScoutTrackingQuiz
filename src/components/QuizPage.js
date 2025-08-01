import { Button, Image, Text, Title } from '@mantine/core';
import ProgressBar from './ProgressBar';

const QuizPage = ({
  currentQuestion,
  questions,
  shuffledOptions,
  score,
  showAnswer,
  selectedAnswer,
  // showResult,
  isCorrect,
  correctAnswers,
  onAnswer,
  onNextQuestion
}) => (
  <>
    {/* プログレスバー */}
    <ProgressBar
      currentQuestion={currentQuestion}
      totalQuestions={questions.length}
      correctAnswers={correctAnswers}
    />
    
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
        height={250}
        width="auto"
        fit="contain"
        style={{ 
          margin: '0 auto',
          height: '250px',
          width: 'auto',
          objectFit: 'contain'
        }}
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
      {shuffledOptions.map((option) => (
        <Button
          key={option}
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