import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
} from "react-native";
// import CustomHeaderButton from "../components/CustomHeaderButton";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
import color from '../../constants/colors';
const { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

var bg = "lightgrey";
// var Rbg = "lightgrey";

export function IsRight(data, stat) {
    if(data == "right"){
        bg = "green"
        // return bg = "green";
        return bg;
    }else if(data != "right" && stat == "choose"){
        return bg = "red";
        console.log("RED");
    }else{
        return bg = "lightgrey";
    }
    // data == "right" ? bg = "green" : 
}

const IsQuiz = (props) => {
    // const choice = props.choice;
    // const type = "exercise";
    let exPart;
    const isQuiz = props.isQuiz;
    if (isQuiz == "exercise"){
            return (
                <View style={styles.blacky}>
                    <TouchableOpacity style={styles.bttn3} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Check</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn3} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Next</Text>
                    </TouchableOpacity>
                </View>)  
    } else {
        return (
            <View style={styles.blacky}>
                <TouchableOpacity style={styles.bttn3} >
                    <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }

};
        
const styles = StyleSheet.create({
    bttn: {
        backgroundColor: "lightgrey",
        borderColor: "white",
        borderWidth: 2,
        padding: 2,
        alignItems: "center",
        alignSelf: "flex-end",
        flex: 5,
        marginRight: "5%",
    },
    nani: {
        flex: 4,
    },
    blacky: {
        flex: 2,
    },
    // bttn2: {
    //     backgroundColor: "lightgrey",
    //     borderColor: "white",
    //     borderWidth: 2,
    //     padding: 5,
    //     paddingLeft: 15,
    //     paddingRight: 15,
    //     paddingBottom: 15,
    //     paddingTop: 15,
    //     margin: 3,
    //     alignItems: "stretch",
    //     marginLeft: "5%",
    //     marginRight: "5%",
    // },
    bttn3: {
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: 2,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 15,
        margin: 3,
        alignItems: "stretch",
        marginLeft: "5%",
        marginRight: "5%",
    },
    search: {
        flexDirection: "column",
        alignItems: "center",
        // width: "100%",
        // marginBottom: "3%",
        flex: 2,
        marginLeft: "5%",
        marginRight: "5%",
    },
    subHeader: {
        flexDirection: "row",
        // alignItems: 'Left',
        // width: "100%",
        marginBottom: "5%",
        // flex: 1,
        // alignItems: 'stretch',
    },
    back: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginRight: 30,
        alignSelf: "flex-start",
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: color.color_5,
        // alignItems: 'center',
        paddingTop: 20,
        flexDirection: "column",
        // alignItems: 'stretch',
        padding: 10,
    },
    subContainer: {
        padding: 10,
        backgroundColor: color.color_4,
        borderRadius: 10,
        flex: 1,
        marginTop: "3%",
        marginBottom: "3%",
        // alignItems: 'center'
    },
    form: {
        // borderBottomColor: '#000',
        // padding: 5,
        // flex: 9,
        // textDecorationLine: "underline",
        backgroundColor: bg,
        borderColor: "black",
        borderWidth: 2,
        padding: 5,
        // paddingLeft: 15,
        // paddingRight: 15,
        // paddingBottom: 15,
        // paddingTop: 15,
        margin: 3,
        alignItems: "stretch",
        // alignSelf: "flex-start",
        marginLeft: "5%",
        marginRight: "5%",
        flex: 1,
    },
    header: {
        fontSize: 20,
        // fontWeight: 'bold',
        alignItems: "flex-start",
        flex: 1,
        margin: 2,
    },
    userProfilePic: {
        resizeMode: "contain",
        width: width * 0.4,
        height: height * 0.4,
    }
});

export default IsQuiz;
