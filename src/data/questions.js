import toRight1 from '../assets/toRight1.png';
import toRight2 from '../assets/toRight2.png';
import toRight3 from '../assets/toRight3.png';
import toRight4 from '../assets/toRight4.png';
import toRight5 from '../assets/toRight5.png';
import toLeft1 from '../assets/toLeft1.png';
import toLeft2 from '../assets/toLeft2.png';
import toLeft3 from '../assets/toLeft3.png';
import toLeftNear1 from '../assets/toLeftNear1.png';
import thisWay1 from '../assets/thisWay1.png';
import thisWay2 from '../assets/thisWay2.png';
import notThisWay1 from '../assets/notThisWay1.png';
import notThisWay2 from '../assets/notThisWay2.png';
import danger1 from '../assets/danger1.png';
import danger2 from '../assets/danger2.png';
import goBack from '../assets/goBack.png';
import message3step from '../assets/message3step.png';

export const questions = [
  {
    image: toRight1,
    correctAnswer: '右に進め',
    options: ['右に進め', '左に進め', '危険']
  },
  {
    image: toRight2,
    correctAnswer: '右に進め',
    options: ['右に進め', '帰った', 'この道を進め']
  },
  {
    image: toRight3,
    correctAnswer: '右に進め',
    options: ['右に進め', 'この方向には進むな', '左に目的地近し']
  },
  {
    image: toRight4,
    correctAnswer: '右に進め',
    options: ['右に進め', '3歩先に通信あり', '左に進め']
  },
  {
    image: toRight5,
    correctAnswer: '右に進め',
    options: ['右に進め', 'この方向には進むな', '左に進め']
  },
  {
    image: toLeft1,
    correctAnswer: '左に進め',
    options: ['左に進め', '右に進め', 'この道を進め']
  },
  {
    image: toLeft2,
    correctAnswer: '左に進め',
    options: ['左に進め', '危険', '帰った']
  },
  {
    image: toLeft3,
    correctAnswer: '左に進め',
    options: ['左に進め', 'この方向には進むな', '3歩先に通信あり']
  },
  {
    image: toLeftNear1,
    correctAnswer: '左に目的地近し',
    options: ['左に目的地近し', '右に進め', '危険']
  },
  {
    image: thisWay1,
    correctAnswer: 'この道を進め',
    options: ['この道を進め', 'この方向には進むな', '引き返せ']
  },
  {
    image: thisWay2,
    correctAnswer: 'この道を進め',
    options: ['この道を進め', '危険', '帰った']
  },
  {
    image: notThisWay1,
    correctAnswer: 'この方向には進むな',
    options: ['この方向には進むな', 'この道を進め', '3歩先に通信あり']
  },
  {
    image: notThisWay2,
    correctAnswer: 'この方向には進むな',
    options: ['この方向には進むな', '左に目的地近し', '危険']
  },
  {
    image: danger1,
    correctAnswer: '危険',
    options: ['危険', 'この道を進め', '帰った']
  },
  {
    image: danger2,
    correctAnswer: '危険',
    options: ['危険', '3歩先に通信あり', '右に進め']
  },
  {
    image: goBack,
    correctAnswer: '帰った',
    options: ['帰った', 'この道を進め', '危険']
  },
  {
    image: message3step,
    correctAnswer: '3歩先に通信あり',
    options: ['3歩先に通信あり', 'この方向には進むな', '左に進め']
  }
]; 