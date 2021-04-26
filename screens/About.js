import React from 'react'
import{View,StyleSheet,Text,Button} from 'react-native';


     
export default function About({navigation}) {
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button
          title="Go to View"
          onPress={() => navigation.navigate('View')}
        />
      </View>
    )
}
