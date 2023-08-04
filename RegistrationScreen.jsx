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

function RegistrationScreen() {
  const [textLogin, onChangeTextLogin] = useState("");
  const [textEmail, onChangeTextEmail] = useState("");
  const [textPassword, onChangeTextPassword] = useState("");

  const [loginFokus, setLoginFocus] = useState(false);
  const [emailFokus, setEmailFocus] = useState(false);
  const [passwordFokus, setPasswordFocus] = useState(false);

  const sendForm = () => {
    console.log("login: ", textLogin);
    console.log("Email: ", textEmail);
    console.log("Password: ", textPassword);
    onChangeTextLogin("");
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
          <View style={styles.avatarBackground}>
            {<Image />}
            <Pressable style={styles.addAvatarButton}>
              <Image
                source={addAvatarButtonIcon}
                style={styles.addAvatarButtonIcon}
              />
            </Pressable>
          </View>
          <Text style={styles.registrationHeader}>
            Реєстрація
          </Text>
          <TextInput
            onFocus={() => setLoginFocus(true)}
            onBlur={() => setLoginFocus(false)}
            style={
              loginFokus
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
              onChangeTextLogin(e.nativeEvent.text)
            }
            value={textLogin}
            placeholder="логін"
          />
          <TextInput
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            style={
              emailFokus
                ? {
                    ...styles.authInputs,
                    ...styles.authInputsFocus,
                  }
                : {
                    ...styles.authInputs,
                  }
            }
            placeholderTextColor={"#BDBDBD"}
            onChange={(e) =>
              onChangeTextEmail(e.nativeEvent.text)
            }
            value={textEmail}
            placeholder="Адреса електронної пошти"
          />
          <TextInput
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            style={
              passwordFokus
                ? {
                    ...styles.authInputs,

                    ...styles.authInputsFocus,
                  }
                : {
                    ...styles.authInputs,
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
            onPress={sendForm}
            style={styles.sendButton}
          >
            <Text style={styles.sendButtonText}>
              Зареєстуватися
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
              Вже є акаунт?{" "}
            </Text>
            <Pressable>
              <Text
                style={{
                  ...styles.textLikeLink,
                  ...styles.link,
                }}
              >
                Увійти
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default RegistrationScreen;