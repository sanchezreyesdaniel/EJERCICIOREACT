
import './App.css'
import { AboutMe } from './componentes/aboutme'
import { Avatar } from './componentes/componente-header/avatar'
import { Menu } from './componentes/componente-header/menu'
import { Contact } from './componentes/contact'
import { Footer } from './componentes/footer'
import { Home, Redes } from './componentes/home'
import { Proyects } from './componentes/proyects'


function App() {
  

  return (
    <>
    <div>
      <div className='flex'>
        <Avatar></Avatar>
        <Menu></Menu>
      </div>
      <div id='home'>
        <Home></Home>
        <Redes></Redes>
      </div>
      <div id='aboutme' className='bg-gray-100'>
        <AboutMe></AboutMe>
      </div>
      <div id='projects'>
        <Proyects></Proyects>
      </div>
      <div id='contact'
  style={{
    backgroundImage: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(src/assets/common-bg.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    padding: '1.5rem 8rem', // Agrega el padding al contenedor principal
  }}
>
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
        
    </div>
    </>
    
    
  )
}

export default App
