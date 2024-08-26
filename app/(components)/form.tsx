import React, { FormEvent } from 'react';

const Form = ({
	handleSubmit,
	handleSubmitClient,
}: {
	handleSubmit?: (e: FormData) => void;
	handleSubmitClient?: (e: FormEvent<HTMLFormElement>) => void;
}) => {
	return (
		<form
			onSubmit={handleSubmitClient}
			action={handleSubmit}
			className='flex flex-col gap-y-5 max-w-md mx-auto'
		>
			<input
				type='number'
				id='user_id'
				name='user_id'
				placeholder='user id'
			/>
			<input
				id='body'
				name='body'
				type='text'
				placeholder='body'
			/>
			<input
				id='title'
				name='title'
				type='text'
				placeholder='title'
			/>
			<button
				type='submit'
				className='bg-blue-500 p-3 transition hover:bg-blue-500/75 rounded-lg text-white'
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
