import React, { Component, useState, createRef } from 'react';
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, Image, Alert } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';

import color from '../constants/colors';
import { login } from '../store/action/userAction';

const { width, height } = Dimensions.get('window');

export default function Login(props) {

    const dispatch = useDispatch()

    const allUser = useSelector((state) => state.user.users);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (username, password) => {
        let user = (allUser.filter(u => u.username === username))
        if (user.length === 1 && (user[0].password === password)) {
            dispatch(login(user[0]));
            props.navigation.navigate('profile');
        } else {
            Alert.alert(
                "Error",
                "Fail to login",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
        // props.navigation.navigate('profile');
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.subContainer} behavior='position' keyboardVerticalOffset='-500'>
                <Text h1 > Login </Text>
                <Image
                    source={require('../assets/img/logo_thoth.png')}
                    style={{ width: width * 0.4, height: width * 0.4, marginTop: 50 }}
                />
                <View style={{ flexDirection: 'column', paddingTop: 50, flex: 1 }}>
                    <Input
                        placeholder='Username'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                        onChangeText={(text) => { setUsername(text) }}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        onChangeText={(text) => { setPassword(text) }}
                        secureTextEntry={true}
                    />
                    <Button
                        icon={
                            <Icon
                                name="login"
                                size={20}
                                color="white"
                            />
                        }
                        iconRight={true}
                        type='solid'
                        raised={true}
                        title='Login  '
                        onPress={() => { loginHandler(username, password) }}
                        containerStyle={{ marginTop: 20 }}
                        buttonStyle={{backgroundColor: color.color_2, borderRadius: 10}}
                    />
                </View>

                <View style={{ alignItems: "center" }}>
                    <Text h4>
                        OR
                    </Text>
                    <Button
                        icon={
                            <Icon
                                name="form"
                                size={20}
                                color="white"
                            />
                        }
                        iconRight={true}
                        type='clear'
                        title='Register  '
                        onPress={() => { props.navigation.navigate('register') }}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.color_5,
        alignItems: 'center',
        paddingTop: 20,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    subContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: color.color_4,
        borderRadius: 10,
        alignItems: 'center'
    },
});
