// import { useEffect, useState } from 'react';
import './pagesStyle/Home.css'
// import GendersViews from './src/components/GendersViews';

const url = 'https://imdb146.p.rapidapi.com/v1/find/?query=brad';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ea1fc26admsh598f249419c913bp152574jsn33ab19562329',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const Home = () => {
  return (
    <div className='container'>
      <h1 className='title-pagName'>Assistir Online</h1>
      {/* <GendersViews/> */}
    </div>
  )
}

export default Home