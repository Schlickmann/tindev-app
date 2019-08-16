import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Logo from '../../assets/logo.png';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior:'padding',
  enabled: Platform.OS === 'ios'
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  padding: 30px;
`;

export const TinDevLogo = styled.Image.attrs({
  source: Logo
})``;

export const Input = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholder: 'Type your Github username...',
  placeholderTextColor: '#999',
  autoCapitalize: 'none',
  autoCorrect: false
})`
  height: 46px;
  align-self: stretch;
  font-size: 18px;
  background-color: #fff;
  border-width: 1;
  border-color: #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0px 15px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #df4723;
  height: 46px;
  align-self: stretch;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
