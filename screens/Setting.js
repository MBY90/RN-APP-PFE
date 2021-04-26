import React , { useState } from 'react';
import{Alert, Modal, StyleSheet, Text, Pressable, View, Button } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteAccount} from '../redux/actions/authaction';

export default function Setting({navigation}) {
  const disptach= useDispatch();
  const email = useSelector(state => state.auth.user.email);
  
  const removeAccountAlert = () =>
  Alert.alert(
    "Delete Alert",
    `Are you sure you want delete your account ${email}`,
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK", onPress: () => {disptach(deleteAccount({email}))} }
    ]
  );
   

    return (
    <View style={{ flex: 1,
      justifyContent: 'center',
      alignItems: "center"}}>
      <Text style={{textAlign:'center',color:'red',fontSize:25}}> Remove your Account </Text>
    
      <Button title= "Delete Account" onPress={removeAccountAlert} />
    </View>
    )}