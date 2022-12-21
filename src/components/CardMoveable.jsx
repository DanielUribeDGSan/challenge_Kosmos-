import React, { useEffect, useState } from 'react';
import Moveable from 'react-moveable';

export const CardMoveable = ({ id, urlImage, title }) => {
	const [target, setTarget] = useState();
	const [frame, setFrame] = useState({
		translate: [0, 0],
	});
	useEffect(() => {
		setTarget(document.querySelector(`.image_${id}`));
		localStorage.setItem('photo_id', id);
	}, []);

	return (
		// <div className="grid-item">
		// 	<img alt={title} src={urlImage} />
		// </div>
		<div>
			<img
				className={`image_${id}`}
				alt={title}
				src={urlImage}
				style={{
					objectFit:
						id === 1
							? 'cover'
							: id === 2
							? 'contain'
							: id === 3
							? 'fill'
							: id === 4
							? 'inherit'
							: id === 5
							? 'revert'
							: 'scale-down',
				}}
			/>
			<Moveable
				className="moveable"
				target={target}
				resizable={true}
				keepRatio={false}
				throttleResize={1}
				renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
				edge={false}
				zoom={1}
				origin={true}
				padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
				onResizeStart={(e) => {
					e.setOrigin(['%', '%']);
					e.dragStart && e.dragStart.set(frame.translate);
				}}
				onResize={(e) => {
					const beforeTranslate = e.drag.beforeTranslate;

					frame.translate = beforeTranslate;
					e.target.style.width = `${e.width}px`;
					e.target.style.height = `${e.height}px`;
					e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
				}}
			/>
		</div>
	);
};
