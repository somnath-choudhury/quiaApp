// App.tsx
import React, {useState} from 'react';
import {StatusBar, useColorScheme, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AppNavigator from './src/navigation/AppNavigator';
import HomeScreen from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [startQuiz, setStartQuiz] = useState(false);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {startQuiz ? (
        <AppNavigator />
      ) : (
        <HomeScreen onStartQuiz={() => setStartQuiz(true)} />
      )}
    </View>
  );
}

export default App;
