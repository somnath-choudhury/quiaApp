import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type HomeScreenProps = {
  onStartQuiz: () => void;
};

export default function HomeScreen({onStartQuiz}: HomeScreenProps) {
  return (
    <LinearGradient colors={['#a1c4fd', '#c2e9fb']} style={styles.container}>
      <ImageBackground
        source={require('../assets/quiz-bg.jpg')}
        style={styles.image}
        resizeMode="cover">
        <SafeAreaView style={styles.overlay}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.appName}>Quiz Master🧠</Text>
          <Text style={styles.subtitle}>
            Challenge your brain and learn something new!
          </Text>
          <TouchableOpacity style={styles.button} onPress={onStartQuiz}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 34,
    color: '#c5e4f6',
    fontWeight: '700',
  },
  appName: {
    fontSize: 40,
    fontWeight: '800',
    color: '#a7d8f3',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#228B22',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#2ecc71',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
});
