import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";

const Profile = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Photos");

  const renderPosts = () => {
    const posts = Array(4).fill(require("../../assets/images/default_post.png"));
    return (
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={item} style={style.postImage} />
        )}
        contentContainerStyle={style.postGrid}
      />
    );
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, { flex: 1 }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={style.backButton}>Späť</Text>
      </TouchableOpacity>
      <View style={style.profileHeader}>
        <Image
          source={require("../../assets/images/mask_group.png")}
          style={style.profileImage}
        />
        <Text style={style.profileTitle}>Emmanuel Robertsen</Text>
        <View style={style.followInfoContainer}>
          <View style={style.followInfo}>
            <Text style={style.followNumber}>45</Text>
            <Text style={style.followLabel}>Following</Text>
          </View>
          <Image
            source={require("../../assets/images/vertical_line.png")}
            style={style.verticalLine}
          />
          <View style={style.followInfo}>
            <Text style={style.followNumber}>30M</Text>
            <Text style={style.followLabel}>Followers</Text>
          </View>
          <Image
            source={require("../../assets/images/vertical_line.png")}
            style={style.verticalLine}
          />
          <View style={style.followInfo}>
            <Text style={style.followNumber}>100</Text>
            <Text style={style.followLabel}>Posts</Text>
          </View>
        </View>
        <Image
          source={require("../../assets/images/vector_line.png")}
          style={style.divider}
        />
        <View style={style.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab("Photos")}>
            <Text style={[style.tabItem, activeTab === "Photos" && style.activeTab]}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("Videos")}>
            <Text style={[style.tabItem, activeTab === "Videos" && style.activeTab]}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("Saved")}>
            <Text style={[style.tabItem, activeTab === "Saved" && style.activeTab]}>Saved</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>{renderPosts()}</View>
    </SafeAreaView>
  );
};

export default Profile;
