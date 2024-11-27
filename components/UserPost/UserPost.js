import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

import UserProfileImage from '../UserProfileImage/UserProfileImage';
import HeartIcon from '../../assets/images/Heart.png';
import ChatIcon from '../../assets/images/Chat.png';
import BookmarkIcon from '../../assets/images/Bookmark.png';
import DotsIcon from '../../assets/images/dots.png'; 
import vectorLine from '../../assets/images/vector_line.png';

const UserPost = ({ profileImage, userName, location, postImage, likes, comments, saves }) => {
  return (
    <View style={style.postContainer}>
      <View style={style.header}>
        <UserProfileImage profileImage={profileImage} imageDimensions={40} />
        <View style={style.userInfo}>
          <Text style={style.userName}>{userName}</Text>
          <Text style={style.location}>{location}</Text>
        </View>
        <TouchableOpacity style={style.moreOptions}>
        <Image source={DotsIcon} style={style.dotsIcon}/>
        </TouchableOpacity>
      </View>

      <Image source={postImage} style={style.postImage} />

     
      <View style={style.reactions}>
        <TouchableOpacity style={style.reactionItem}>
          <Image source={HeartIcon} style={style.reactionIcon} />
          <Text style={style.reactionText}>{likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.reactionItem}>
          <Image source={ChatIcon} style={style.reactionIcon} />
          <Text style={style.reactionText}>{comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.reactionItem}>
          <Image source={BookmarkIcon} style={style.reactionIcon} />
          <Text style={style.reactionText}>{saves}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.separatorLine} />
    </View>
  );
};

UserPost.propTypes = {
  profileImage: PropTypes.any.isRequired,
  userName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  postImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  saves: PropTypes.number.isRequired,
};

export default UserPost;
