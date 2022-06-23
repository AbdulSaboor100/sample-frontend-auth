import React from "react";
import { useGoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

// const clientId =
//   "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

const clientId =
  "439127139765-tgr7e687ptor2mim87ojkno99no09s1m.apps.googleusercontent.com";

function LoginHooks() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div>
      <button onClick={signIn} className="button">
        <img src="icons/google.svg" alt="google login" className="icon"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
      <div>
        <br />
        <br />

        <FacebookLogin
          appId="422949036407232"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    </div>
  );
}

export default LoginHooks;
