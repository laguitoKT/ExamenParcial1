import React, {useState} from "react";
import {Image,StyleSheet, StatusBar, View, Text, Button, TextInput, Alert,TouchableOpacity} from 'react-native';

export default function Myform(){

  const [id, setid] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [displayText, setDisplayText] = useState({
    id: "",
    Name: "",
    Email: "",
    Phone: ""
  });


  const handlePress = () => {
        /* Alert.alert(
          "Your Data: ",
          `ID: ${id}\nName: ${Name}\nEmail: ${Email}\nPhone: ${Phone}`
        ); */
    setDisplayText({
    id: id,
    Name: Name,
    Email: Email,
    Phone: Phone
    });

    setid("");
    setName("");
    setEmail("");
    setPhone("");
  }

  return (

    <View style={styles.container}>
      <Text style ={styles.title}>NFL GamePass</Text>
      <Image style={styles.image} source={require('./assets/logo-NFL.png')}/>
      <View style={styles.formulario}>
        <Text style={styles.text}>ID: </Text>

        <TextInput style={styles.input}
        placeholder='Type your ID'
        value={id}
        onChangeText={setid}
        keyboardType="numeric"
        />

        <Text style={styles.text}>Full Name:   </Text>

        <TextInput style={styles.input}    
          placeholder='Type your Name'
          value={Name}
          onChangeText={setName}
        />

        <Text style={styles.text} >Email:  </Text>

        <TextInput style={styles.input}
          placeholder='Type your Email'
          value={Email}
          onChangeText={setEmail}
        />

        <Text style={styles.text}>Phone Number: </Text>

        <TextInput style={styles.input}
          placeholder='Type your Phone Number' 
          value={Phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>ENTER</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
      <Text style={styles.title}>Your Data:</Text>
      <View style={styles.text2}>
        <Text style={styles.text3}  variant="headlineSmall">ID: {displayText.id}</Text>
        <Text style={styles.text3} variant="headlineSmall">Name: {displayText.Name}</Text>
        <Text style={styles.text3} variant="headlineSmall">Email: {displayText.Email}</Text>
        <Text style={styles.text3} variant="headlineSmall">Phone Number: {displayText.Phone}</Text>
      </View>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
  },

  formulario: {
    backgroundColor:'#013369',
    borderRadius: 10,
    paddingLeft:20,
    paddingRight:20,
    padding: 10,
    paddingBottom:25,
  },

  title: {
    color:'#013369',
    paddingLeft:80,
    paddingRight:80,
    fontSize: 20.9,
    textAlign:'center',
    fontWeight: 'bold',
    marginBottom: 5,
    borderBottomWidth: 3,
    borderColor: '#D50A0A',
    opacity:50,
  },
  input: {
      height: 45,
      width: 300,
      borderWidth: 1,
      textAlign: 'left',
      padding: 10,
      borderColor: '#D50A0A',
      borderRadius: 5,
      marginBottom: 5,
      backgroundColor: '#f9f9f9',
  },
  image:{
    marginTop:1,
    marginBottom:5,
    width: 110,
    height: 110,
  },
  text:{
    color:'#f9f9f9',
    fontSize: 18,
    textAlign:'left',
    fontWeight:'bold',
    paddingTop:5,
    paddingBottom:5,
  },
  text2:{
    color:'#D50A0A',
    backgroundColor:'#013369',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#D50A0A',
    padding:10,
    borderRadius:10,
    marginTop:10,
    width: "100%",

  },
  text3:{
    textAlign:'left',
    fontSize: 15,
    color:'#f9f9f9',
    paddingLeft:5,
    paddingRight:2,
    fontWeight:'bold',
  },

  button:{
    backgroundColor:'#D50A0A',
    borderRadius:10,
    marginTop:10,
    padding:10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign:'center'
  }

});
 