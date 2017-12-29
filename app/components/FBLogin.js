import React, { Component } from 'react';
import {
    Stylesheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import FBSDK from 'react-native-fbsdk';

const {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} = FBSDK;


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


//Create response callback.
_responseInfoCallback(error, result) {
  if (error) {
    alert('Error fetching data: ' + error.toString());
  } else {
      console.log(result)
    alert('WELCOME ' + result.name);
  }
}



    // Start the graph request.
    _requestInfo(){
        console.log("requesting info")
        // Create a graph request asking for user information with a callback to handle the response.
        const infoRequest = new GraphRequest("/me", null, this._responseInfoCallback);
        new GraphRequestManager()
            .addRequest(infoRequest)
            .start();
        }

render() {
    return (
    //   <View>
    //     <TouchableOpacity
    //     onPress={() => this._handleLogin()}
    //     >
    //     <Text>
    //         Facebook Login
    //     </Text>
    //     </TouchableOpacity>

    //   </View>


    <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                      console.log("user data: " + JSON.stringify(data))
                    //   alert("Login Successful !")
                    // alert(data.accessToken.toString())
                    this._requestInfo();
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}



