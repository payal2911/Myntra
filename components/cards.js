import {StyleSheet, View, Dimensions} from 'react-native';

//import Colors from '../../constants/color';

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   card: {
       // justifyContent: 'center',
        //alignItems: 'center',
        marginHorizontal: 24,
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 16,
        backgroundColor:"white",
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'Black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        width: 300,
        marginBottom: 20,
    },
});