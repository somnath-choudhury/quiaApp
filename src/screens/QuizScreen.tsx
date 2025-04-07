import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import {RouteProp} from '@react-navigation/native';
import {quizzes} from '../data/quizzes';
import {QuizResult} from '../types/quiz';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Quiz'>;
  route: RouteProp<RootStackParamList, 'Quiz'>;
};

export default function QuizScreen({navigation, route}: Props) {
  const {quizId} = route.params;
  const quiz = quizzes.find(q => q.id === quizId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [quizResults, setQuizResults] = useState<QuizResult>({
    quizId,
    correctAnswers: 0,
    incorrectAnswers: 0,
    questionResults: [],
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );

    return () => backHandler.remove();
  }, []);

  if (!quiz) {
    return (
      <View style={styles.container}>
        <Text>Quiz not found</Text>
      </View>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleOptionSelect = (optionIndex: number) => {
    if (!isAnswerChecked) {
      setSelectedOption(optionIndex);
    }
  };

  const checkAnswer = () => {
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setIsAnswerChecked(true);

    setQuizResults(prev => ({
      ...prev,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      incorrectAnswers: prev.incorrectAnswers + (isCorrect ? 0 : 1),
      questionResults: [
        ...prev.questionResults,
        {
          questionId: currentQuestion.id,
          correct: isCorrect,
          selectedAnswer: selectedOption!,
          correctAnswer: currentQuestion.correctAnswer,
        },
      ],
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      navigation.replace('Result', {results: quizResults});
    }
  };

  const getOptionStyle = (index: number) => {
    if (!isAnswerChecked) {
      return index === selectedOption ? styles.selectedOption : styles.option;
    }

    if (index === currentQuestion.correctAnswer) {
      return styles.correctOption;
    }

    if (
      index === selectedOption &&
      selectedOption !== currentQuestion.correctAnswer
    ) {
      return styles.incorrectOption;
    }

    return styles.option;
  };

  return (
    <ImageBackground
      source={require('../assets/quizScreen-bg.jpg')}
      style={styles.image}
      resizeMode="cover">
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}>
        <SafeAreaView style={styles.container}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${
                    ((currentQuestionIndex + 1) / quiz.questions.length) * 100
                  }%`,
                },
              ]}
            />
          </View>

          <Text style={styles.questionCount}>
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </Text>

          <Text style={styles.questionText}>{currentQuestion.text}</Text>

          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={getOptionStyle(index)}
                onPress={() => handleOptionSelect(index)}
                disabled={isAnswerChecked}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              selectedOption === null &&
                !isAnswerChecked &&
                styles.buttonDisabled,
            ]}
            onPress={isAnswerChecked ? nextQuestion : checkAnswer}
            disabled={selectedOption === null && !isAnswerChecked}>
            <Text style={styles.buttonText}>
              {isAnswerChecked
                ? currentQuestionIndex === quiz.questions.length - 1
                  ? 'See Results'
                  : 'Next Question'
                : 'Check Answer'}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#444',
    borderRadius: 4,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  questionCount: {
    fontSize: 18,
    color: '#eee',
    marginBottom: 12,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  optionsContainer: {
    marginBottom: 24,
  },
  option: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  selectedOption: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  correctOption: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  incorrectOption: {
    backgroundColor: '#F44336',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 20,
    color: '#black',
    fontWeight: '800',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#673AB7',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#888',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
