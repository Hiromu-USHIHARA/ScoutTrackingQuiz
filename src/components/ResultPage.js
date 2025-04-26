import React from 'react';
import { Title, Text, Button } from '@mantine/core';

const ResultPage = ({ score, questions, onBackToStart }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '2rem 0'
  }}>
    <Title 
      order={1} 
      style={{ 
        fontSize: '3.5rem',
        marginBottom: '2rem'
      }}
    >
      クイズ終了！
    </Title>
    <Text 
      size="xl" 
      style={{ 
        fontSize: '2rem',
        marginBottom: '1.5rem'
      }}
    >
      あなたのスコア: {score} / {questions.length}
    </Text>
    <Text 
      size="lg" 
      style={{ 
        fontSize: '1.8rem',
        color: score === questions.length ? '#40C057' : '#228BE6',
        marginBottom: '3rem'
      }}
    >
      {score === questions.length ? '完璧です！' : 'お疲れ様でした！'}
    </Text>
    <Button 
      size="xl" 
      onClick={onBackToStart}
      style={{ 
        width: '300px',
        height: '80px',
        fontSize: '1.8rem',
        fontWeight: 'bold'
      }}
    >
      トップページに戻る
    </Button>
  </div>
);

export default ResultPage; 