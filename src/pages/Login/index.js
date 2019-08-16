import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';

import api from "../../services/api";

import { Container, TinDevLogo, Input, Button, TextButton } from "./styles";

export default function Login({ navigation }) {
  const [developer, setDeveloper] = useState("");

  useEffect(() => {
    async function getDeveloperLogged() {
      const user = await AsyncStorage.getItem('developer')
      if (user) {
        navigation.navigate('Main', { user });
      }
    }

    getDeveloperLogged();
  }, []);

  async function handleLogin() {
    const { data } = await api.post('/devs', {
      username: developer
    });

    const { _id } = data;

    await AsyncStorage.setItem('developer', _id);

    navigation.navigate("Main", { user: _id });
  }
  return (
    <Container>
      <TinDevLogo />
      <Input value={developer} onChangeText={setDeveloper} />
      <Button onPress={handleLogin}>
        <TextButton>JOIN</TextButton>
      </Button>
    </Container>
  );
}
