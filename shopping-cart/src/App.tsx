import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// react-toastify import
import { ToastContainer } from 'react-toastify';

// react-bootstrap
import Container from 'react-bootstrap/Container';

// components
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Store from './pages/Store';
import About from './pages/About';
import Main from './layout/Main';
import { ShoppingCartProvider } from './context/ShoppingCart';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			errorElement: <NotFound />,
			children: [
				{
					index: true,
					element: <Home />,
					errorElement: <NotFound />,
				},
				{
					path: '/store',
					element: <Store />,
					errorElement: <NotFound />,
				},
				{
					path: '/about',
					element: <About />,
					errorElement: <NotFound />,
				},
			],
		},
	]);

	return (
		<ShoppingCartProvider>
			<div className='App m-0 p-0'>
				<RouterProvider router={router} />
				<ToastContainer />
			</div>
		</ShoppingCartProvider>
	);
}

export default App;
