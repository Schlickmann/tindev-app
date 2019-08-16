import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from "react-native";
import api from "../../services/api";

import {
  Container,
  TinDevLogo,
  CardsContainer,
  Card,
  Avatar,
  Footer,
  Name,
  Bio,
  ButtonsContainer,
  Button,
  Like,
  Dislike,
  Empty,
  MatchContainer,
  ItsAMatch,
  AvatarMatch,
  NameMatch,
  BioMatch,
  CloseButton
} from './styles';

export default function Main({ navigation }) {
  const id = navigation.getParam("user");
  const [developers, setDevelopers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    async function loadDevelopers() {
      const { data } = await api.get("/devs", {
        headers: {
          user: id,
        },
      });

      setDevelopers(data);
    }

    loadDevelopers();
  }, [id]);

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { developer: id }
    });

    socket.on("match", developer => {
      setMatchDev(developer);
    });
  }, [id]);

  async function handleLike() {
    const [developer, ...rest] = developers;

    await api.post(`/devs/${developer._id}/likes`, null, {
      headers: {
        user: id,
      }
    });

    setDevelopers(rest);
  }

  async function handleDislike() {
    const [developer, ...rest] = developers;

    await api.post(`/devs/${developer._id}/dislikes`, null, {
      headers: {
        user: id,
      }
    });

    setDevelopers(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('Login')
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleLogout}>
        <TinDevLogo />
      </TouchableOpacity>

      <CardsContainer>
        {developers.length === 0 ? (
          <Empty>There is no more developers to see :(</Empty>
        ) : (
          developers.map((developer, index) => (
            <Card
              key={developer._id}
              style={{ zIndex: developers.length - index }}
            >
              <Avatar
                source={{
                  uri: developer.avatar
                }}
              />
              <Footer>
                <Name>{developer.name}</Name>
                <Bio numberOfLines={3}>{developer.bio}</Bio>
              </Footer>
            </Card>
          ))
        )}
      </CardsContainer>

      { developers.length > 0 && (
        <ButtonsContainer>
          <Button onPress={handleDislike}>
            <Dislike />
          </Button>
          <Button onPress={handleLike}>
            <Like />
          </Button>
        </ButtonsContainer>
      )}

      {matchDev && (
        <MatchContainer>
          <ItsAMatch />
          <AvatarMatch source={{ uri: matchDev.avatar }} />
          <NameMatch>{matchDev.name}</NameMatch>
          <BioMatch>{matchDev.bio}</BioMatch>

          <TouchableOpacity type="button" onPress={() => setMatchDev(null)}>
            <CloseButton>CLOSE</CloseButton>
          </TouchableOpacity>
        </MatchContainer>
      )}
    </Container>
  );
}
