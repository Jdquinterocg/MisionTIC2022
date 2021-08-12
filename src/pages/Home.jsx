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
			
			<Titulo>¡Buenas veci! ¿Qué necesita hoy?</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
				<	TextoSlide>
						<p>Contamos con variedad de frutas y verduras</p>
					</TextoSlide>
					<a href="https://www.google.com">
						<img src={img1} alt=""/>
					</a>					
				</Slide>
				<Slide>
					<TextoSlide>
						<p>Tenemos las mejores marcas en productos de aseo</p>
					</TextoSlide>
					<a href="https://www.google.com">
						<img src={img2} alt=""/>
					</a>					
				</Slide>
				<Slide>
				<TextoSlide>
						<p>Lácteos con el mejor precio</p>
					</TextoSlide>
					<a href="https://www.google.com">
						<img src={img3} alt=""/>
					</a>					
				</Slide>
				<Slide>
					<TextoSlide>
						<p>Y muchos productos más...</p>
					</TextoSlide>
					<a href="https://www.google.com">
						<img src={img4} alt=""/>
					</a>					
				</Slide>
			</Slideshow>
			<Cats />
			<Cards />
		</main>
	);
}
// text-transform: uppercase;
const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	color: #064420;
	
	margin-bottom: 3px;
`;

export default Home;
