import { initializeApp } from 'firebase/app'
import {
	GoogleAuthProvider,
	getAuth,
	setPersistence,
	browserLocalPersistence,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDg_JSlPdk0Nqbkb4COlEfDWEcTsi-E180',
	authDomain: 'my-life-bdde2.firebaseapp.com',
	projectId: 'my-life-bdde2',
	storageBucket: 'my-life-bdde2.appspot.com',
	messagingSenderId: '774086150619',
	appId: '1:774086150619:web:b71a471e75547e9807fffe',
	measurementId: 'G-HZJLW5N49S',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
