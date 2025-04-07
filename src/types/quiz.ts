export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface QuizResult {
  quizId: number;
  correctAnswers: number;
  incorrectAnswers: number;
  questionResults: {
    questionId: number;
    correct: boolean;
    selectedAnswer: number;
    correctAnswer: number;
  }[];
}
