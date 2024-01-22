import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoute } from './auth/PublicRoute'
import { SignUpPage } from './pages/SignUp'
import { SignInPage } from './pages/SignIn'
import { RecipeList } from './pages/food/RecipeList'
import { PrivateRoute } from './auth/PrivateRoute'

export const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<PublicRoute />}>
				<Route path='/sign-in' element={<SignInPage />} />
				<Route path='/sign-up' element={<SignUpPage />} />
			</Route>
			<Route element={<PrivateRoute />}>
				<Route path='/food' element={<RecipeList />} />
				<Route path='/food/add-recipe' element={<AddRecipe />} />
			</Route>
		</Routes>
	</BrowserRouter>
)
