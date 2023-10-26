// react-bootstrap
import { Card, Button } from 'react-bootstrap';

// utilities
import { formatCurrency } from '../utilities/formatCurrency';
import { UseShoppingCart } from '../context/ShoppingCart';

// heroIcons
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/20/solid';

// types
type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = UseShoppingCart();

	const quantity = getItemQuantity(id);

	return (
		<Card className='h-100'>
			<Card.Img
				variant='top'
				src={imgUrl}
				height={200}
				style={{
					objectFit: 'cover',
				}}
			/>
			<Card.Body className='d-flex flex-column'>
				<Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
					<span className='fs-2'>{name}</span>
					<span className='ms-2'>{formatCurrency(price)}</span>
				</Card.Title>

				<div className='mt-auto'>
					{quantity === 0 ? (
						<Button
							className='w-100'
							onClick={() => increaseCartQuantity(id)}
						>
							Add to cart
						</Button>
					) : (
						<div
							className='d-flex align-items-center flex-column'
							style={{
								gap: '0.5rem',
							}}
						>
							<div
								className='d-flex align-items-center justify-content-center'
								style={{
									gap: '0.5rem',
								}}
							>
								<Button
									variant='danger'
									onClick={() => decreaseCartQuantity(id)}
								>
									<MinusIcon width={20} />
								</Button>
								<div>
									<span className='fs-3'>{quantity}</span>
								</div>
								<Button onClick={() => increaseCartQuantity(id)}>
									<PlusIcon width={20}/>
								</Button>
							</div>

							<Button
								onClick={() => removeFromCart(id)}
								variant='danger'
							>
								<TrashIcon width={20} />
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default StoreItem;
