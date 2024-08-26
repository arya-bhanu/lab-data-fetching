'use client';
import { useQuery } from '@tanstack/react-query';
import React, { FormEvent } from 'react';
import { fetchData } from './(api)/api';
import type { CardType } from '@/global.type';
import Card from '../(components)/card';
import clsx from 'clsx';
import Form from '../(components)/form';

const ClientPage = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['json'],
		queryFn: fetchData,
	});
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		console.log('submiting');
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
		} catch (err) {
			console.error(err);
		}
	}
	return (
		<div>
			{isLoading && <p>Loading data ...</p>}
			<div
				className={clsx('max-h-[40vh] overflow-auto ', isLoading && 'hidden')}
			>
				{!data ? (
					<p>Data is empty or error</p>
				) : (
					(data as CardType[]).map((el) => (
						<Card
							key={el.id}
							{...el}
						/>
					))
				)}
			</div>
			<Form handleSubmitClient={handleSubmit} />
		</div>
	);
};

export default ClientPage;
