import { UseShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';

import { Button, Stack } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { XMarkIcon } from '@heroicons/react/20/solid';

type CartItemProps = {
	id: number;
	quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
	const { removeFromCart } = UseShoppingCart();
	const item = storeItems.find((item) => item.id === id);
	if (item == null) return null;

	return (
		<Stack
			direction='horizontal'
			gap={2}
		>
			<img
				src={item.imgUrl}
				alt=''
				style={{
					width: '125px',
					height: '75px',
					objectFit: 'cover',
				}}
			/>
			<div className='me-auto'>
				<div>
					{item.name}{' '}
					{quantity > 1 && (
						<span className='text-muted'>
							<small>{quantity}x</small>
						</span>
					)}
				</div>

				<div className='text-muted'>
					<small>{formatCurrency(item.price)}</small>
				</div>
			</div>
			<div>{formatCurrency(item.price)}</div>
			<Button
				variant='outline-danger'
				onClick={() => removeFromCart(id)}
			>
				<XMarkIcon width={20} />
			</Button>
		</Stack>
	);
};

export default CartItem;
