import {
	browserLocalPersistence,
	createUserWithEmailAndPassword,
	setPersistence,
} from 'firebase/auth'
import { auth } from '../api/firebase'
import React, { useEffect, useState } from 'react'

interface AuthContextType {
	user: any
	signin: (email: string, password: string, callback: VoidFunction) => void
	signout: (callback: VoidFunction) => void
}

export const AuthContext = React.createContext<AuthContextType>(null!)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<any>(null)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user)
		})

		return () => unsubscribe()
	}, [])

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
