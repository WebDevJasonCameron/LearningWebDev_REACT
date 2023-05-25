// Libs
import { Routes, Route } from 'react-router-dom';

// Comp
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';

// App
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='/auth' element={<Authentication />} />
				<Route path='/shop' element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
