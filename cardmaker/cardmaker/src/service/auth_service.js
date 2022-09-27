import firebase from "firebase";
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
    logout() {
        firebase.auth().signOut().then(() => {
            alert("로그아웃 되었습니다.");
            window.location.href ="http://localhost:3000/"
          }).catch((error) => {
            alert(`로그인 실패 ${error}`);
          });
    }
}


export default AuthService;