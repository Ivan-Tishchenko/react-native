import React, { useState } from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles";

import location from "./images/map-pin.png";
import addButtonIcon from "./images/camera_alt.png";
import addButtonIconBlack from "./images/camera_alt-black.png";

function CreatePostsScreen() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          padding: 16,
          backgroundColor: "#FFF",
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 240,
            backgroundColor: "#f6f6f6",
            borderColor: "#e8e8e8",
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          {image && (
            <Image
              source={image}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: 8,
              }}
            />
          )}
          <Pressable
            style={
              image
                ? {
                    ...styles.createPostsButtonAdd,
                    backgroundColor:
                      "rgba(255, 255, 255, 0.30)",
                  }
                : {
                    ...styles.createPostsButtonAdd,
                    backgroundColor: "#fff",
                  }
            }
            onPress={() => {
              setImage("./images...");
            }}
          >
            <Image
              source={
                image ? addButtonIcon : addButtonIconBlack
              }
              style={styles.createPostsButtonAddImage}
            />
          </Pressable>
        </View>
        <Text style={styles.createPostsText}>
          Завантажте фото
        </Text>
        <TextInput
          placeholder="Назва..."
          style={{
            ...styles.createPostsInput,
            marginBottom: 16,
            marginTop: 32,
          }}
          onChangeText={setName}
          value={name}
        />
        <View style={{ marginBottom: 32 }}>
          <TextInput
            placeholder="Місцевість..."
            style={{
              ...styles.createPostsInput,
              paddingLeft: 28,
            }}
            onChangeText={setPlace}
            value={place}
          />
          <Image
            source={location}
            style={{
              position: "absolute",
              left: 0,
              top: 13,
            }}
          />
        </View>
        <Pressable
          style={
            image && name && place
              ? {
                  ...styles.createPostsButtonCreate,
                  backgroundColor: "#FF6C00",
                }
              : {
                  ...styles.createPostsButtonCreate,
                  backgroundColor: "#f6f6f6",
                }
          }
        >
          <Text
            style={
              image && name && place
                ? {
                    ...styles.createPostsButtonCreateText,
                    color: "#fff",
                  }
                : {
                    ...styles.createPostsButtonCreateText,
                    color: "#BDBDBD",
                  }
            }
          >
            Опубликовать
          </Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CreatePostsScreen;
