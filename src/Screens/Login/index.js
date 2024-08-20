import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "firebase/auth";

export default Login = ( {setUser} ) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
    console.log(user)
    setUser(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log(error)
  });

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => setUser({email, password})}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: "#555",
        borderRadius: 5,
        padding: 10,
        width: "80%",
        marginBottom: 10
    },
    button: {
        backgroundColor: "#141414",
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    }
})
