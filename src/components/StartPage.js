import React from 'react';
import { Title, Text, Button } from '@mantine/core';

const StartPage = ({ onStart, questions }) => (
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
      ボーイスカウト
      <br />
      追跡サインクイズ
    </Title>
    <Text 
      size="xl" 
      style={{ 
        fontSize: '1.5rem',
        lineHeight: '1.6',
        marginBottom: '3rem'
      }}
    >
      追跡サインの意味を当てるクイズです。
      <br />
      何問正解できるかな？
    </Text>
    <Button 
      size="xl" 
      onClick={onStart}
      style={{ 
        width: '300px',
        height: '80px',
        fontSize: '1.8rem',
        fontWeight: 'bold'
      }}
    >
      クイズを始める
    </Button>
    <Text />
    <a
      href="https://github.com/Hiromu-USHIHARA/ScoutTrackingQuiz.git"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'block', marginBottom: '2rem', color: '#228be6', fontWeight: 'bold', textDecoration: 'underline' }}
    >
      GitHubリポジトリはこちら
    </a>
  </div>
);

export default StartPage; 