import { Box } from '@mantine/core';

const ProgressBar = ({ currentQuestion, totalQuestions, correctAnswers }) => {
  const progressItems = Array.from({ length: totalQuestions }, (_, index) => {
    const isAnswered = index < currentQuestion;
    const isCorrect = isAnswered && correctAnswers[index];
    
    return {
      index,
      isAnswered,
      isCorrect
    };
  });

  return (
    <Box
      style={{
        width: '100%',
        height: '8px',
        backgroundColor: '#e9ecef',
        borderRadius: '4px',
        display: 'flex',
        overflow: 'hidden',
        marginBottom: '20px'
      }}
    >
      {progressItems.map((item) => (
        <Box
          key={`progress-${item.index}`}
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: item.isAnswered
              ? item.isCorrect
                ? '#28a745' // 緑色（正解）
                : 'rgba(108, 117, 125, 0.6)' // 灰色透過（不正解）
              : '#e9ecef', // 未回答
            marginRight: item.index < totalQuestions - 1 ? '2px' : '0',
            borderRadius: item.index === 0 ? '4px 0 0 4px' : 
                         item.index === totalQuestions - 1 ? '0 4px 4px 0' : '0',
            transition: 'background-color 0.3s ease'
          }}
        />
      ))}
    </Box>
  );
};

export default ProgressBar; 