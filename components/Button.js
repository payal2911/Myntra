import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useState} from "react";


function Button ({press}) {

    const [input, setInput] = useState("");
    return(

        <TouchableOpacity style={styles.buttonView}  onPress={press}>
    <View style={styles.buttonText}>
        <Text style={styles.textStyle}>Sign up and Shop at Myntra</Text>
    </View>
    <View>
    <Ionicons name="arrow-forward" size={24} color="white" />
    </View>
</TouchableOpacity>

    );


    
}

export default Button;

const styles = StyleSheet.create({
    buttonView:{
         marginHorizontal: 20,
        marginTop:8,
        marginBottom: 8,
        padding: 8,
        backgroundColor: '#fd2e53',
        borderRadius: 30,
        flexDirection: 'row',
        // overflow:'hidden',
    },
    buttonText:{
    flex:1,
    alignItems:'center',
},
textStyle:{
    fontFamily:'open-sans',
    color: "white",
    fontSize:15
},

});
