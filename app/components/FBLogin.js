import React, { Component } from 'react';
import {
    Stylesheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import FBSDK from 'react-native-fbsdk';

const { LoginManager, AccessToken } = FBSDK;


export default class FBLogin extends Component {

_handleLogin(){
    LoginManager.logInWithReadPermissions(['public_profile']).then((user) => {
        if(user.isCancelled){
            alert('Unable to sign in, cancelled by user')
        }else{
            console.log('user info: ' + JSON.stringify(user))
            alert('Login success with permissions' + user.grantedPermissions.toString())
            // console.log("current user:" + this.user)
        }
    })
    .catch((err) => {
        alert('Login fail with error: ' + err)
    })
}

render() {
    return (
      <View>
        <TouchableOpacity
        onPress={() => this._handleLogin()}
        >
        <Text>
            Facebook Login
        </Text>
        </TouchableOpacity>

      </View>
    );
  }
}



