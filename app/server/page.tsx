import type { CardType } from '@/global.type';
import React, { FormEvent } from 'react';
import Card from '../(components)/card';
import clsx from 'clsx';
import Form from '../(components)/form';
import { revalidateTag } from 'next/cache';

const ServerPageIndex = async () => {
	const staticData = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
		cache: 'no-store',
		next: {
			tags: ['data'],
		},
	});
	const data = await staticData.json();

	async function handleSubmitForm(formData: FormData) {
		'use server';

		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts',
				{
					method: 'POST',
					body: JSON.stringify({
						title: formData.get('title'),
						body: formData.get('body'),
						userId: formData.get('user_id'),
					}),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}
			);
			console.log(await response.json());
			revalidateTag('data');
		} catch (err) {
			console.error(err);
		}
	}
	return (
		<div>
			<div className={clsx('max-h-[50vh] overflow-y-scroll')}>
				{(data as CardType[]).map((el) => (
					<Card
						key={el.id}
						{...el}
					/>
				))}
			</div>
			<Form handleSubmit={handleSubmitForm} />
		</div>
	);
};

export default ServerPageIndex;
