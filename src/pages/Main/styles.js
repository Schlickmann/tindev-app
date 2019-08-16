import styled from "styled-components/native";
import logo from "../../assets/logo.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
`;

export const TinDevLogo = styled.Image.attrs({
  source: logo,
})`
  margin-top: 30px;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  border-width: 1;
  border-color: #ddd;
  border-radius: 8;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const Footer = styled.View`
  background-color: #fff;
  padding: 20px 15px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Bio = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  line-height: 18px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity.attrs({
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 2,
  shadowOffset: {
    width: 0,
    height: 2
  },
})`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  elevation: 2;
`;

export const Like = styled.Image.attrs({
  source: like,
})``;
export const Dislike = styled.Image.attrs({
  source: dislike,
})``;

export const Empty = styled.Text`
  align-self: center;
  color: #999;
  font-size: 24px;
  font-weight: bold;
`;
