import React , { useState } from 'react';
import{Alert,Text, View, Button,StyleSheet ,TouchableOpacity,Modal,Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteAccount} from '../redux/actions/authaction';






export default function Setting({navigation}) {


 





  const [modalVisible, setModalVisible] = useState(false);
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
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
       
      </View>
   
      <TouchableOpacity  onPress={() => setModalVisible(true)}
      style={[styles.signIn,
          { 
          borderBottomColor:'#009387',
           borderWidth:1,
           marginTop:100
      }]}>

      <Text style={[styles.textSign,{
        color:'#009387'
    }]} > Add New Sensor </Text>
      </TouchableOpacity>
     

      <TouchableOpacity onPress={removeAccountAlert} 
      style={[styles.signIn,
          { 
          borderBottomColor:'#009387',
           borderWidth:1,
           marginTop:100
      }]}
      >

      <Text style={[styles.textSign,{
          color:'red'
      }]} > Delete Your Account </Text>
      </TouchableOpacity>
    </View>
    )}
    const styles = StyleSheet.create({

      signIn: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

    })