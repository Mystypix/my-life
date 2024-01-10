import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: "AIzaSyDg_JSlPdk0Nqbkb4COlEfDWEcTsi-E180",
	authDomain: "my-life-bdde2.firebaseapp.com",
	projectId: "my-life-bdde2",
	storageBucket: "my-life-bdde2.appspot.com",
	messagingSenderId: "774086150619",
	appId: "1:774086150619:web:b71a471e75547e9807fffe",
	measurementId: "G-HZJLW5N49S",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
