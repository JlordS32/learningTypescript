// react bootstrap imports
import { Container, Navbar as NavbarBs, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// heroicons imports
import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import { UseShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {
	const { openCart, cartQuantity } = UseShoppingCart();

	return (
		<NavbarBs className='bg-white shadow-sm mb-3'>
			<Container>
				<Nav className='me-auto'>
					<Nav.Link
						to='/'
						aria-label='Go to home'
						as={NavLink}
					>
						<span>Home</span>
					</Nav.Link>
					<Nav.Link
						to='/about'
						aria-label='Go to about'
						as={NavLink}
					>
						<span>About</span>
					</Nav.Link>
					<Nav.Link
						to='/store'
						aria-label='Go to store'
						as={NavLink}
					>
						<span>Store</span>
					</Nav.Link>
				</Nav>
				<Button
					variant='outline-primary rounded-circle'
					style={{
						position: 'relative',
						height: '3rem',
						aspectRatio: 'auto',
					}}
					onClick={openCart}
				>
					<ShoppingCartIcon width={20} />
					{cartQuantity > 0 && (
						<div
							className='rounded-circle bg-danger d-flex justify-content-center align-items-center text-white'
							style={{
								width: '1.5rem',
								aspectRatio: '1/1',
								position: 'absolute',
								bottom: 0,
								right: 0,
								transform: 'translate(30%, 30%)',
								fontSize: '0.7rem',
							}}
						>
							{cartQuantity}
						</div>
					)}
				</Button>
			</Container>
		</NavbarBs>
	);
};

export default Navbar;
