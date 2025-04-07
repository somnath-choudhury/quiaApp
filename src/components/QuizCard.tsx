import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {Quiz} from '../types/quiz';
import LinearGradient from 'react-native-linear-gradient';

interface QuizCardProps {
  quiz: Quiz;
  onPress: () => void;
}

export default function QuizCard({quiz, onPress}: QuizCardProps) {
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={onPress}>
      <ImageBackground
        source={require('../assets/quiz-bg.jpg')}
        style={styles.image}
        imageStyle={styles.imageStyle}
        resizeMode="cover">
        <LinearGradient
          colors={['rgba(161, 196, 253, 0.8)', 'rgba(194, 233, 251, 0.8)']}
          style={styles.gradient}>
          <View style={styles.content}>
            <Text style={styles.title}>{quiz.title}</Text>
            <Text style={styles.description}>{quiz.description}</Text>
            <Text style={styles.questionCount}>
              {quiz.questions.length} Questions
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: 160,
  },
  imageStyle: {
    borderRadius: 16,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    padding: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2e86de',
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    color: '#555',
    marginBottom: 6,
    fontWeight:"bold"
  },
  questionCount: {
    fontSize: 14,
    color: '343434',
    fontWeight:"bold"
  },
});
