import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import {RouteProp} from '@react-navigation/native';
import {quizzes} from '../data/quizzes';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Result'>;
  route: RouteProp<RootStackParamList, 'Result'>;
};

export default function ResultScreen({navigation, route}: Props) {
  const {results} = route.params;
  const quiz = quizzes.find(q => q.id === results.quizId);

  if (!quiz) {
    return (
      <View style={styles.container}>
        <Text>Quiz not found</Text>
      </View>
    );
  }

  const score = (results.correctAnswers / quiz.questions.length) * 100;

  return (
    <ImageBackground
      source={require('../assets/result-bg.jpg')} // Add your background image in `assets`
      style={styles.image}
      resizeMode="cover">
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
        style={styles.gradient}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Quiz Results</Text>

          <View style={styles.scoreCard}>
            <Text style={styles.scoreTitle}>{quiz.title}</Text>
            <Text style={styles.scoreText}>Your Score: {score.toFixed(0)}%</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={[styles.statText, styles.correctText]}>
                  Correct: {results.correctAnswers}
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statText, styles.incorrectText]}>
                  Incorrect: {results.incorrectAnswers}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Question Summary</Text>

          <ScrollView style={styles.summaryContainer}>
            {results.questionResults.map((result: any, index: any) => {
              const question = quiz.questions[index];
              return (
                <View key={index} style={styles.questionSummary}>
                  <Text style={styles.questionText}>{question.text}</Text>
                  <View style={styles.answerContainer}>
                    <Text style={styles.answerLabel}>Your Answer:</Text>
                    <Text
                      style={[
                        styles.answerText,
                        result.correct
                          ? styles.correctText
                          : styles.incorrectText,
                      ]}>
                      {question.options[result.selectedAnswer]}
                    </Text>
                  </View>
                  {!result.correct && (
                    <View style={styles.answerContainer}>
                      <Text style={styles.answerLabel}>Correct Answer:</Text>
                      <Text style={[styles.answerText, styles.correctText]}>
                        {question.options[result.correctAnswer]}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => navigation.navigate('QuizList')}>
            <Text style={styles.homeButtonText}>Back to Quizzes</Text>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  scoreCard: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  scoreTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00FFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 16,
    fontWeight: '600',
  },
  correctText: {
    color: '#4CAF50',
  },
  incorrectText: {
    color: '#F44336',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#fff',
  },
  summaryContainer: {
    flex: 1,
  },
  questionSummary: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7DF9FF',
    marginBottom: 12,
  },
  answerContainer: {
    marginBottom: 8,
  },
  answerLabel: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 4,
  },
  answerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  homeButton: {
    backgroundColor: '#673AB7',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  homeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
