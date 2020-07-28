import React from 'react';
import dadosIniciais from './data/dados_iniciais.json';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O filme narra a história do jovem Aaron Swartz (1986-2013), um jovem programador norte-americano que acreditava na mudança radical do mundo através da internet e da computação. Durante toda a sua vida, Aaron usou a programação computacional como uma forma de nos ajudar a resolver problemas e tornar o mundo um lugar mais democrático, justo e eficiente. Em uma destas tentativas, Aaron irá usar a rede do MIT (Massachusetts Institute of Technology) para realizar o download massivo de milhões de artigos acadêmicos de uma base de dados privada chamada JSTOR. Nesse meio-tempo, o Ministério Público dos Estados Unidos irá conduzir um processo criminal contra Aaron, que termina por levá-lo ao suicídio. "}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default App;
