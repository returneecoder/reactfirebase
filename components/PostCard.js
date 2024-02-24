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
import { useContext } from 'react'
import { AuthContext } from '../navigation/AuthProvider';
 

const PostCard = ({item,onDelete}) => {

  const{user,logout} = useContext(AuthContext)

    likeIcon = item.liked ? 'heart' : 'heart-outline';
  likeIconColor = item.liked ? '#2e64e5' : '#333';
  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }
  
  if(item.comments === 1){
    commentText= "1 comment";
  } else if (item.comments >1){
    commentText= item.comments + 'Comments';
  }else{
    commentText ='Comment'
  }
    
  return (
    <Card>
        <UserInfo>
          <UserImg source={{uri:item.userImg}} />
          <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime.toString()}</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>
          {item.post}
        </PostText>
        {item.postImg !== null ? <PostImg source ={{uri:item.postImg}}/> :<Divider/>}
       
       {/*  <PostImg source={require('../assets/posts/post-img-1.png')} /> */}
        <InteractionWrapper>
          <Interaction active={item.liked}>
            <Ionicons name={likeIcon} size={25} color={likeIconColor} />
            <InteractionText active={item.liked} >{likeText}</InteractionText>
          </Interaction>
          <Interaction>
          <Ionicons name="chatbubble-outline" size={20} color="black" />
          <InteractionText>{commentText}t</InteractionText>
          </Interaction>
          {user.uid == item.userId ? (
          <Interaction onPress={() => onDelete(item.id)}>
            <Ionicons name="trash-bin-sharp" size={25} />
          </Interaction>
        ) : null}
        </InteractionWrapper>
    </Card>
  )
}

export default PostCard