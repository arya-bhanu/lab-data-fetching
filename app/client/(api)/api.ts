export const fetchData = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		return await response.json();
	} catch (err) {
		console.error(err);
	}
};
