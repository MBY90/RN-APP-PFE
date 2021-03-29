import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { View,StyleSheet, } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {AuthContext} from '../context/Context';


export default function CustomDrawer({...props }) {
   const { SignOut }= React.useContext(AuthContext);
    return (
      <View style={{flex:1}} >
    <DrawerContentScrollView { ...props}>
    
    <View styles={styles.drawerContent}> 
    <View style={styles.userInfoSection}>
    <Icon.Button name="menu" size ={25} color='black' backgroundColor='white'
    onPress={()=>props.navigation.closeDrawer()}> </Icon.Button> 
    <View>
    <Title style={styles.title}> Med BEN YOUSSEF </Title>
    <Caption style={styles.caption}> @MBY </Caption>
    </View>
    
    </View>
    <Drawer.Section styles={styles.drawerSection}>
    <DrawerItem 
    icon={(color,size)=>
        <Icon name="home-outline"
        color={color}
        size={20}
        />
    }
    label="View"
    onPress={()=>{props.navigation.navigate('View')}}
    />
    <DrawerItem 
    icon={(color,size)=>
        <Icon name="account-outline"
        color={color}
        size={20}
        />
    }
    label="About"
    onPress={()=>{props.navigation.navigate('About')}}
    />
    </Drawer.Section>
    </View>
    </DrawerContentScrollView>
    <Drawer.Section style={styles.bottomDrawerSection}>
   
    <DrawerItem 
    icon={(color,size)=>
        <Icon name="exit-to-app"
        color={color}
        size={20}
        />
    }
    label="Sign Out"
    onPress={()=>{SignOut()}}
    />
    
    </Drawer.Section>
      </View>
            
    )}


    const styles = StyleSheet.create({
        drawerContent: {
          flex: 1,
        },
        userInfoSection: {
          paddingLeft: 20,
        },
        title: {
          fontSize: 16,
          marginTop: 3,
          fontWeight: 'bold',
        },
        caption: {
          fontSize: 14,
          lineHeight: 14,
        },
        row: {
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        },
        section: {
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 15,
        },
        paragraph: {
          fontWeight: 'bold',
          marginRight: 3,
        },
        drawerSection: {
          marginTop: 15,
        },
        bottomDrawerSection: {
            marginBottom: 15,
            borderTopColor: '#f4f4f4',
            borderTopWidth: 1
        },
        preference: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 16,
        },
      });
    