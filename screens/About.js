import React from 'react'
import{View,StyleSheet,Text,Button} from 'react-native';

import { DrawerActions } from '@react-navigation/native';
     
export default function About({navigation}) {
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('View')}
        />
      </View>
    )
}
