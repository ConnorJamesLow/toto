import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, TextInput, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { ThemeProps } from './interfaces/CommonInterfaces';
import { getTheme } from '../redux/selectors';
import IEditor from './interfaces/IEditor';

class Editor extends Component<ThemeProps, IEditor> {
  private input: any;

  constructor(props) {
    super(props);
  }

  focusInput(event: GestureResponderEvent) {
    console.log(event);
    event.preventDefault();
    this.input.focus();
  }

  render() {
    const { theme } = this.props;
    return (
      <TouchableOpacity style={theme.outerEditor} onPress={e => this.focusInput(e)}>
        <View style={theme.innerEditor}>
          <TextInput multiline autoFocus ref={input => { this.input = input; }}
            style={[theme.input, { textAlign: 'center', paddingVertical: 8 }]} />
        </View>
      </TouchableOpacity>
    );
  }
}

// maps the redux store to the App props for reactive updates of the theme.
const mapStateToProps = (state: any) => ({
  theme: getTheme(state)
});

export default connect(mapStateToProps)(Editor);
