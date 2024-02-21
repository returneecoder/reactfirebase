import { View, Text ,FlatList,SafeAreaView} from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    Container,
    Card,
    UserInfo,
    UserImg,
    UserName,
    PostTime,
    PostText,
    PostImg,
    InteractionWrapper,
    Interaction,
    InteractionText,
    Divider,
    UserInfoText,
  } from '../styles/FeedStyles';

 

const PostCard = ({item}) => {

    likeIcon = item.liked ? 'heart' : 'heart-outline';
  likeIconColor = item.liked ? '#2e64e5' : '#333';
  return (
    <Card>
        <UserInfo>
          <UserImg source={item.userImg} />
          <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>
          {item.post}
        </PostText>
        {item.postImg !== "none" ? <PostImg source ={item.postImg}/> :<Divider/>}
       
       {/*  <PostImg source={require('../assets/posts/post-img-1.png')} /> */}
        <InteractionWrapper>
          <Interaction>
            <Ionicons name="heart-outline" size={25} color="black" />
            <InteractionText >Like</InteractionText>
          </Interaction>
          <Interaction>
          <Ionicons name="chatbubble-outline" size={20} color="black" />
          <InteractionText>Comment</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  )
}

export default PostCard