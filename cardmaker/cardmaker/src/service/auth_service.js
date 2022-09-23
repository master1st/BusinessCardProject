import firebase from "firebase";
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
    logout() {
        firebase.auth().signOut().then(() => {
            console.log("Sign-out successful");
          }).catch((error) => {
            console.log(error);
          });
    }
}


export default AuthService;