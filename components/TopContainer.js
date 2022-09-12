import {View, Text, Image, StyleSheet} from "react-native";

function TopContainer(){
    return (
<View style={styles.container}>
<Image style={styles.image}
  source={require('../assets/Images/myntra.png')}
/>
<Text style={styles.text}>Myntra </Text>
<Text style={styles.innerText}>Up to 2.67% Crypto Cashback</Text> 
</View>
    );
}

export default TopContainer;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
      },
      image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 60,
        borderWidth: 1,
        borderColor: '#ccc',
      },
      text: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        // fontWeight: 'bold',
        marginTop: 8,
      },
      innerText: {
        fontFamily: 'open-sans-bold',
        fontSize: 17,
        color: '#fb2e53',
        marginTop: 8,
        textAlign: 'center'
      },
});
