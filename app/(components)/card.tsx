import type { CardType } from '@/global.type';
import React from 'react';

const Card = ({ body, id, title, userId }: CardType) => {
	return (
		<figure>
			<h2>{title}</h2>
			<figcaption>
				<p>{body}</p>
			</figcaption>
		</figure>
	);
};

export default Card;
