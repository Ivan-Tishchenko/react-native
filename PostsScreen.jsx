import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import logOut from "./images/log-out.png";
import styles from "./styles";

import postImage1 from "./images/postImage1.jpg";
import postImage2 from "./images/postImage2.jpg";

import comentIcon from "./images/message-circle.png";
import placeIcon from "./images/map-pin.png";

const posts = [
  {
    id: 1,
    img: postImage1,
    title: "Ліс",
    countComents: 3,
    place: "Ivano-Frankivs'k Region, Ukraine",
  },
  {
    id: 2,
    img: postImage2,
    title: "Sunset",
    countComents: 0,
    place: "Chorne more, Ukrain",
  },
  {
    id: 3,
    img: postImage1,
    title: "Ліс",
    countComents: 3,
    place: "Ivano-Frankivs'k Region, Ukraine",
  },
  {
    id: 4,
    img: postImage2,
    title: "Sunset",
    countComents: 0,
    place: "Chorne more, Ukrain",
  },
  {
    id: 5,
    img: postImage1,
    title: "Ліс",
    countComents: 3,
    place: "Ivano-Frankivs'k Region, Ukraine",
  },
  {
    id: 6,
    img: postImage2,
    title: "Sunset",
    countComents: 0,
    place: "Chorne more, Ukrain",
  },
];

function PostsScreen() {
  return (
    <View>
      <View style={styles.postsScreenHeader}>
        <Text style={styles.postsScreenHeaderText}>
          Публікації
        </Text>
        <Pressable style={styles.logoutPostsScreeen}>
          <Image
            source={logOut}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </Pressable>
      </View>
      <ScrollView style={styles.postsScreenBody}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.avatarBackgroundPostsScreen}>
            {/* <Image /> */}
          </View>
          <View>
            <Text>NAME</Text>
            <Text>Email</Text>
          </View>
        </View>
        {posts.map((obj, index) => {
          return (
            <View
              key={obj.id}
              style={
                index !== 0
                  ? styles.posts
                  : { ...styles.posts, marginTop: 32 }
              }
            >
              <Image
                source={obj.img}
                style={styles.postImage}
              />
              <Text style={styles.postMoreInformationText}>
                {obj.title}
              </Text>
              <View style={styles.postMoreInformationBlock}>
                <Pressable
                  style={styles.postMoreInformationBlock}
                >
                  <Image
                    source={comentIcon}
                    style={{ width: 10, height: 10 }}
                  />
                  <Text>{obj.countComents}</Text>
                </Pressable>
                <Pressable
                  style={styles.postMoreInformationBlock}
                >
                  <Image
                    source={placeIcon}
                    style={{ width: 10, height: 10 }}
                  />
                  <Text>{obj.place}</Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default PostsScreen;
