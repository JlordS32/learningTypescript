import Navbar from '../components/Navbar';

// react-bootstrap
import { Container } from 'react-bootstrap';

// rrd
import { Outlet } from 'react-router-dom';

const Main = () => {
	return (
		<div className='layout'>
			<Navbar />
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};

export default Main;
