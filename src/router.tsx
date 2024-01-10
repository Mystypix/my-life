import { createBrowserRouter } from "react-router-dom";
import { SignUpPage } from "./pages/signup";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},
	{
		path: "/signup",
		element: <SignUpPage />,
	},
]);
