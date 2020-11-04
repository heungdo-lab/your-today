import React, { useState, useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../context/UserContext";

import Text from "../components/Text";

export default SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [_, setUser] = useContext(UserContext);

  const getStarted = async () => {
    setLoading(true);

    try {
      setUser({
        username,
        password,
        isLoggedIn: true,
      });
    } catch (error) {
      console.log("Error @getStarted: ", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Main>
        <Text title semi center>
          Welcome!!
        </Text>
        <Text large semi center>
          I've been waiting for you :)
        </Text>
      </Main>

      <Auth>
        <AuthContainer>
          <AuthTitle>Username</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="username"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="default"
            onChangeText={(username) => setUsername(username.trim())}
            value={username}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Password</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password.trim())}
            value={password}
          />
        </AuthContainer>
      </Auth>

      <SignInContainer onPress={getStarted} disabled={loading}>
        {loading ? (
          <Loading />
        ) : (
          <Text bold center color="#ffffff">
            Let's get started
          </Text>
        )}
      </SignInContainer>

      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 192px;
`;

const Auth = styled.View`
  margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: 48px;
`;

const SignInContainer = styled.TouchableOpacity`
  height: 48px;
  margin: 0 32px;
  justify-content: center;
  align-items: center;
  background-color: #8022d9;
  border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: "#ffffff",
  size: "small",
}))``;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -50px;
  z-index: -100;
`;

const RightCircle = styled.View`
  position: absolute;
  background-color: #8022d9;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  top: -200px;
  right: -100px;
`;

const LeftCircle = styled.View`
  position: absolute;
  background-color: #23a6d5;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  top: -50px;
  left: -50px;
`;

const StatusBar = styled.StatusBar``;
