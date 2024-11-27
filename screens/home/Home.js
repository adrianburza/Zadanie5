import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, FlatList } from "react-native";
import Title from "../../components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import style from "./style";
import UserStory from "../../components/UserStory/UserStory";
import globalStyle from '../../assets/styles/globalStyle';
import UserPost from "../../components/UserPost/UserPost";
import { Routes } from '../../navigation/Routes';

const Home = ({ navigation }) => {
  const userStories = [
    { firstName: "Joseph", id: 1, profileImage: require("../../assets/images/default_profile.png") },
    { firstName: "Angel", id: 2, profileImage: require("../../assets/images/default_profile.png") },
    { firstName: "White", id: 3, profileImage: require("../../assets/images/default_profile.png") },
    { firstName: "Olivier", id: 4, profileImage: require("../../assets/images/default_profile.png") },
    { firstName: "David", id: 5, profileImage: require("../../assets/images/default_profile.png") },
    { firstName: "Anna", id: 6, profileImage: require("../../assets/images/default_profile.png") },
    { firstName: "Chris", id: 7, profileImage: require("../../assets/images/default_profile.png") },
    { firstName: "Lara", id: 8, profileImage: require("../../assets/images/default_profile.png") },
  ];

  const userPosts = [
    {
      id: 1,
      userName: "Allison Becker",
      location: "Sukabumi, Jawa Barat",
      profileImage: require("../../assets/images/default_profile.png"),
      postImage: require("../../assets/images/default_post.png"),
      likes: 1201,
      comments: 24,
      saves: 55,
    },
    {
      id: 2,
      userName: "Jennifer Wilkson",
      location: "Pondok Leungsir, Jawa Barat",
      profileImage: require("../../assets/images/default_profile.png"),
      postImage: require("../../assets/images/default_post.png"),
      likes: 950,
      comments: 18,
      saves: 34,
    },
    {
      id: 3,
      userName: "David Hamilton",
      location: "Bandung, Jawa Barat",
      profileImage: require("../../assets/images/default_profile.png"),
      postImage: require("../../assets/images/default_post.png"),
      likes: 850,
      comments: 12,
      saves: 40,
    },
    {
      id: 4,
      userName: "Sarah Tan",
      location: "Jakarta, Indonesia",
      profileImage: require("../../assets/images/default_profile.png"),
      postImage: require("../../assets/images/default_post.png"),
      likes: 1543,
      comments: 35,
      saves: 60,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
        return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);


    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
        <View>
            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={style.header}>
                            <Title title={"Let's Explore"} />
                            <TouchableOpacity style={style.messageIcon} onPress={() => { 
                                navigation.navigate(Routes.Profile) 
                                }}>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    size={20}
                                    color={"#898DAE"}
                                />
                                <View style={style.messageNumberContainer}>
                                    <Text style={style.messageNumber}>2</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={style.userStoryContainer}>
                            <FlatList
                                onEndReachedThreshold={0.5}
                                onEndReached={() => {
                                    if (isLoadingUserStories) return;
                                    setIsLoadingUserStories(true);
                                    const contentToAppend = pagination(
                                        userStories,
                                        userStoriesCurrentPage + 1,
                                        userStoriesPageSize,
                                    );
                                    if (contentToAppend.length > 0) {
                                        setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                                        setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
                                    }
                                    setIsLoadingUserStories(false);
                                }}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                data={userStoriesRenderedData}
                                renderItem={({ item }) => (
                                    <UserStory
                                        key={"userStory" + item.id}
                                        firstName={item.firstName}
                                        profileImage={item.profileImage}
                                    />
                                )}
                            />
                        </View>
                    </>
                }
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (isLoadingUserPosts) return;
                    setIsLoadingUserPosts(true);
                    const contentToAppend = pagination(
                        userPosts,
                        userPostsCurrentPage + 1,
                        userPostsPageSize,
                    );
                    if (contentToAppend.length > 0) {
                        setUserPostsCurrentPage(userPostsCurrentPage + 1);
                        setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
                    }
                    setIsLoadingUserPosts(false);
                }}
                data={userPostsRenderedData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={style.userPostContainer}>
                        <UserPost
                            profileImage={item.profileImage}
                            userName={item.userName}
                            location={item.location}
                            postImage={item.postImage}
                            likes={item.likes}
                            comments={item.comments}
                            saves={item.saves}
                        />
                    </View>
                )}
                //keyExtractor={(item) => item.id.toString()}
            />
        </View>
    </SafeAreaView>
  );
};

export default Home;
