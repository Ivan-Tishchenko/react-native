import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";

import background from "./images/background.jpg";
import addAvatarButtonIcon from "./images/Union.png";

import styles from "./styles";

function LoginScreen() {
  const [textEmail, onChangeTextEmail] = useState("");
  const [textPassword, onChangeTextPassword] = useState("");

  const [loginFokus, setLoginFocus] = useState(false);
  const [emailFokus, setEmailFocus] = useState(false);
  const [passwordFokus, setPasswordFocus] = useState(false);

  const [isPasswordShow, setIsPasswordShow] =
    useState(true);

  const sendForm = () => {
    console.log("Email: ", textEmail);
    console.log("Password: ", textPassword);

    onChangeTextEmail("");
    onChangeTextPassword("");
  };

  return (
    <View style={styles.background}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.authBacground}>
          <Text style={styles.registrationHeader}>
            Увійти
          </Text>

          <TextInput
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            style={
              emailFokus
                ? {
                    ...styles.authInputs,
                    marginTop: 0,
                    ...styles.authInputsFocus,
                  }
                : {
                    ...styles.authInputs,
                    marginTop: 0,
                  }
            }
            placeholderTextColor={"#BDBDBD"}
            onChange={(e) =>
              onChangeTextEmail(e.nativeEvent.text)
            }
            value={textEmail}
            placeholder="Адреса електронної пошти"
          />
          <View style={{ marginTop: 16 }}>
            <TextInput
              secureTextEntry={isPasswordShow}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              style={
                passwordFokus
                  ? {
                      ...styles.authInputs,
                      marginTop: 0,
                      ...styles.authInputsFocus,
                    }
                  : {
                      ...styles.authInputs,
                      marginTop: 0,
                    }
              }
              placeholderTextColor={"#BDBDBD"}
              onChange={(e) =>
                onChangeTextPassword(e.nativeEvent.text)
              }
              value={textPassword}
              placeholder="Пароль"
            />
            <Pressable
              onPress={() =>
                setIsPasswordShow(!isPasswordShow)
              }
              style={styles.showPasswordButton}
            >
              <Text style={styles.showPasswordText}>
                Показати
              </Text>
            </Pressable>
          </View>
          <Pressable
            onPress={sendForm}
            style={styles.sendButton}
          >
            <Text style={styles.sendButtonText}>
              Увійти
            </Text>
          </Pressable>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <Text style={styles.textLikeLink}>
              Немає акаунту?{" "}
            </Text>
            <Pressable>
              <Text
                style={{
                  ...styles.textLikeLink,
                  ...styles.link,
                }}
              >
                Зареєструватися
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default LoginScreen;
