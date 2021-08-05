import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../components/Slideshow'
import './styles/Home.css';
import styled from 'styled-components';
import img1 from '../imagenes/img-home/1.jpg';
import img2 from '../imagenes/img-home/2.jpg';
import img3 from '../imagenes/img-home/3.jpg';
import img4 from '../imagenes/img-home/4.jpg';
import Cards from '../components/Cards'
import Cats from '../components/categoria'

const Home = () => {
	return (
		<main>
			<Titulo>Buenas veci, ¿En qué podemos colaborarle?</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
					<a href="https://www.google.com">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>Contamos con variedad de frutas y verduras</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.google.com">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>Tenemos las mejores marcas en productos de aseo</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.google.com">
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p>Lácteos con el mejor precio</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.google.com">
						<img src={img4} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>Y muchos productos más</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
			<Cats />
			<Cards />
		</main>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 
export default Home;
