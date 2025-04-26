import toRight1 from '../assets/images/toRight1.png';
import toRight2 from '../assets/images/toRight2.png';
import thisWay1 from '../assets/images/thisWay1.png';
import notThisWay1 from '../assets/images/notThisWay1.png';

export const questions = [
  {
    image: toRight1,
    correctAnswer: '右に進め',
    options: ['右に進め', '左に進め', 'まっすぐ進め']
  },
  {
    image: toRight2,
    correctAnswer: '右に進め',
    options: ['右に進め', '左に進め', 'まっすぐ進め']
  },
  {
    image: thisWay1,
    correctAnswer: 'この方向に進め',
    options: ['この方向に進め', 'この方向には進むな', '危険']
  },
  {
    image: notThisWay1,
    correctAnswer: 'この方向には進むな',
    options: ['この方向に進め', 'この方向には進むな', '危険']
  }
]; 