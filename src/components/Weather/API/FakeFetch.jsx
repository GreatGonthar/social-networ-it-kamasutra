const fakeFetch = ({city, key}) => {
	return new Promise((resolve, reject) => {
		if (!key) {
			reject(console.log("key = 0, ERROR"));
		} else {
			resolve({ key, city });
		}
	});
};
export default fakeFetch