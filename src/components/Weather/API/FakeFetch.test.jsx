import { render, screen } from '@testing-library/react';
import React from 'react';
import fakeFetch from "./FakeFetch"

test('fake fetch is GOOD', () => {
	const data = {city: 'moscow', key: 123}
	const unswer = fakeFetch(data) 
  expect(unswer.city).toEqual('moscow')
});


// const fakeFetch = ({city, key}) => {
// 	return new Promise((resolve, reject) => {
// 		if (!key) {
// 			reject(console.log("key = 0, ERROR"));
// 		} else {
// 			resolve({ key, city });
// 		}
// 	});
// };