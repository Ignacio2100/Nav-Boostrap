import React from 'react';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://umg.edu.gt/assets/info.jpg")',
    backgroundSize: '100% 100%',
   // backgroundPosition: 'center',
    height: '92vh', // Ajusta esta altura según tus necesidades
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: '24px',
    textAlign: 'center',
  };

  const citeStyle = {
    backgroundImage: 'url("https://umg.edu.gt/assets/versebg.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    boxSizing: 'border-box',
    display: 'block',
    fontFamily: 'Arial, sans-serif',
    fontSize: '30px',
    left: '50%',
    padding: '10px',
    position: 'absolute',
    textAlign: 'center',
    textShadow: '1px 1px #fff',
    top: '15%',
    transform: 'translateX(-50%)',
    width: '95%',
    zIndex: 2,
  };

 
  return (
    <div style={backgroundStyle}>
      <div>
      <cite style={citeStyle}>
      "El estudio es el camino que conduce a la comprensión, y la comprensión es el camino que conduce al conocimiento y la sabiduría."
	</cite>
      </div>
    </div>
  );
}

export default Home;
