import Image from 'next/image';
import React from 'react';

const categoryList = [
	{
		imagsrc: '/images/viewers-disney.png',
		alt: 'disney',
		videosrc: '/videos/disney.mp4',
	},
	{
		imagsrc: '/images/viewers-marvel.png',
		alt: 'marvel',
		videosrc: '/videos/marvel.mp4',
	},
	{
		imagsrc: '/images/viewers-pixar.png',
		alt: 'pixar',
		videosrc: '/videos/pixar.mp4',
	},
	{
		imagsrc: '/images/viewers-starwars.png',
		alt: 'starwars',
		videosrc: '/videos/star-wars.mp4',
	},
	{
		imagsrc: '/images/viewers-national.png',
		alt: 'national geographic',
		videosrc: '/videos/national-geographic.mp4',
	},
];

const Category = () => {
	return (
		<div className="category">
			{categoryList.map((v, i) => (
				<div className="wrap" key={i}>
					<Image src={v.imagsrc} alt={v.alt} fill />
					<video autoPlay loop muted>
						<source src={v.videosrc} type="video/mp4" />
					</video>
				</div>
			))}
		</div>
	);
};

export default Category;
