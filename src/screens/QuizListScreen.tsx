import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import {quizzes} from '../data/quizzes';
import QuizCard from '../components/QuizCard';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'QuizList'>;
};

export default function QuizListScreen({navigation}: Props) {
  return (
    <LinearGradient colors={['#a1c4fd', '#c2e9fb']} style={styles.container}>
      <ImageBackground
        source={require('../assets/quiz1-bg.png')}
        style={styles.image}
        resizeMode="cover">
        <SafeAreaView style={styles.overlay}>
          <Text style={styles.title}>Available Quizzes</Text>
          <FlatList
            data={quizzes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <QuizCard
                quiz={item}
                onPress={() => navigation.navigate('Quiz', {quizId: item.id})}
              />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
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
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
});
