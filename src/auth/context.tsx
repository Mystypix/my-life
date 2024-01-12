import {
	browserLocalPersistence,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	setPersistence,
} from 'firebase/auth'
import { auth } from '../api/firebase'
import React, { useEffect } from 'react'

interface AuthContextType {
	user: any
	signin: (email: string, password: string, callback: VoidFunction) => void
	signout: (callback: VoidFunction) => void
}

export const AuthContext = React.createContext<AuthContextType>(null!)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<any>(null)

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser)
			} else {
				setUser(null)
			}
		})
	}, [user])

	const signin = async (
		email: string,
		password: string,
		callback: VoidFunction,
	) => {
		return setPersistence(auth, browserLocalPersistence)
			.then(() =>
				createUserWithEmailAndPassword(auth, email, password).then(
					(user: any) => {
						setUser(user)
						callback()
					},
				),
			)
			.catch((error) => {
				console.log('Error', error)
			})
	}

	const signout = async (callback: VoidFunction) => {
		return auth.signOut().then(() => {
			setUser(null)
			callback()
		})
	}

	const value = { user, signin, signout }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
