import React from 'react';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';
import Editor from './src/components/Editor';
import { Provider, connect } from 'react-redux';
import { getTheme } from './src/redux/selectors';
import store from './src/redux/store';
import { ThemeProps } from './src/components/interfaces/CommonInterfaces';

const initialState = { ready: false };
type State = Readonly<typeof initialState>;

class ThemedApp extends React.Component<ThemeProps, State> {
  constructor(props: Readonly<ThemeProps>) {
    super(props);
    this.state = {
      ready: false
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ ready: true });
  }

  render() {
    const { theme } = this.props;
    const { ready } = this.state;
    return ready
      ? (
        <View style={theme.baseView}>
          <Editor />
        </View>
      ) : (
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>Loading</Text>
        </View>
      );
  }
}

// maps the redux store to the App props for reactive updates of the theme.
const mapStateToProps = (state: any) => ({
  theme: getTheme(state)
});

const App = connect(mapStateToProps)(ThemedApp);

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}