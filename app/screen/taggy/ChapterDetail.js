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
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';

const ChapterDetail = (props) => {
    const name = props.navigation.getParam("name");
    const detail = props.navigation.getParam("detail");
    const exercises = props.navigation.getParam("exercises");
    const chapter = props.navigation.getParam("chapters");
    const subject = props.navigation.getParam("subject");
    // console.log(name);
    // console.log(detail);
    // console.log(exercises);
    const user = useSelector( (state) => state.user.currentUser);
    let execlusive;
    if (user.role === 'teacher'){
        execlusive = (
            <TouchableOpacity onPress={() => { props.navigation.navigate('createQuiz', {chapter: chapter, subject, subject}) }} style={styles.bttn3}>
                <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>+</Text>
            </TouchableOpacity>
        )
    }else{
        execlusive = (<TouchableOpacity ></TouchableOpacity>)
    }
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.subHeader}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => { props.navigation.pop() }}>
                        <AntDesign name="left" size={24} color="black" style={{ flex: 1 }} />
                    </TouchableOpacity>
                    <Text style={{ color: color.color_1, fontSize: 23, fontWeight: 'bold', flex: 6 }}>{name}</Text>
                </View>
                <View style={styles.search}>
                    <Text style={{ color: color.color_1, fontSize: 23, fontWeight: 'bold', flex: 1, alignSelf: "flex-start" }}>Detail</Text>
                    <Text style={{ color: color.color_1, fontSize: 18, flex: 6, alignSelf: "flex-start" }}>{detail}</Text>
                </View>
                <View style={styles.nani}>
                    {
                        exercises.map((element, index) => (
                            <ListItem key={index} bottomDivider containerStyle={styles.bttn2} onPress={() => { props.navigation.navigate('exercisePage', { name: element.name, type: element.type, questions: element.questions }) }}>
                                {/* <ListItem.Content> */}
                                <TouchableOpacity >
                                    <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>{element.name}</Text>
                                </TouchableOpacity>
                                {/* </ListItem.Content> */}
                            </ListItem>
                        ))
                    }
                    {execlusive}
                    {/* <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('exercisePage', {id: '1'})}}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Exercise 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('exercisePage', {id: '2'})}}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Exercise 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('exercisePage', {id: '3'})}}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Exercise 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('exercisePage', {id: '4'})}}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Exercise 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('exercisePage', {id: '5'})}}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Exercise 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn3} onPress={() => { props.navigation.navigate('createQuiz')}}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>+</Text>
                    </TouchableOpacity> */}
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bttn: {
        // backgroundColor: "lightgrey",
        // borderColor: "white",
        // borderWidth: 2,
        // padding: 2,
        // alignItems: "center",
        // // alignSelf: "flex-end",
        // flex: 1,
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
        flex: 2,
    },
    bttn2: {
        backgroundColor: color.color_3,
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
        // marginBottom: "7%",
        flex: 1,
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
        borderBottomColor: '#000',
        padding: 5,
        flex: 9,
        // textDecorationLine: "underline",
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

export default ChapterDetail;
