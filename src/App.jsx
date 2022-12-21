import { useEffect } from 'react';

import './App.css';
import { CardMoveable } from './components/CardMoveable';
import { useMoveable } from './hooks/useMoveable';

const App = () => {
	const { photos, apiAddPhotos, apiDeletePhotos } = useMoveable();

	return (
		<div id="parent">
			{photos.map(({ id, url, title }) => (
				<CardMoveable key={id} id={id} urlImage={url} title={title} />
			))}
			<button className="addFloat" onClick={apiAddPhotos}>
				Agregar
			</button>
			<button className="deleteFloat" onClick={apiDeletePhotos}>
				Eliminar
			</button>
		</div>
	);
};

export default App;
