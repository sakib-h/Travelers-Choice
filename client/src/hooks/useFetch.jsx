import React, { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
		};
	}, [url]);

	return <div>useFetch</div>;
};

export default useFetch;
