import React from 'react'
import{View,StyleSheet,Text,Button} from 'react-native';

       
export default function ViewScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    )
}
