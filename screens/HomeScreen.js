/* eslint-disable */
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useEffect,useState } from 'react';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore'

import PostCard from '../components/PostCard';

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
} from '../styles/FeedStyles';


const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    postTime: '4 mins ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-3.jpg'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    postTime: '2 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    postTime: '1 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-2.jpg'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    postTime: '1 day ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-4.jpg'),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    postTime: '2 days ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
  },
];
const HomeScreen = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  useEffect( () => {
const fetchPosts  =async ()=> {
  try {
    const list =[];
   await  firestore().collection('posts')
    .get()
    .then(
      (querySnapshot) =>{
            console.log(`query snapshot ${querySnapshot.size}`)
            querySnapshot.forEach((doc)=>{
            const {userId,post,postImg,postTime,likes,comments}= doc.data();
            list.push({
              id: doc.id,
              userId,
                userName: 'Christy Alex',
                userImg: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                postTime: postTime,
                post,
                postImg,
                liked: false,
                likes,
                comments,
            })
      })
  })
setPosts(list)
if(loading){
  setLoading(false)
}
}
  catch (e){
console.log(e)
  }

}
fetchPosts()
  }, []);
  const {user, logout} = useContext(AuthContext);
  return (
    <Container>
      <FlatList
      data={posts}
      renderItem={({item})=><PostCard item={item}/>}
      keyExtractor={item =>item.id}
      showsVerticalScrollIndicator= {false}
      />
    </Container>
  );
};

export default HomeScreen;
