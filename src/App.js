import Header from './components/NavBar/Header.js'
import Banner from'./components/Banner/Banner.js'
import Card from './components/Card/Card.js'
import Footer from './components/Footer/Footer.js'
import './App.css';
import {orginals,action,ComedyMovies,HorrorMovies} from './Urls.js'

function App() {
  return (
   <>
   <Header/>
   <Banner/>
   <Card urls={orginals} title='Netflix Orginal'/>
   <Card urls={action} title='Action' isSmall/>
   <Card urls={ComedyMovies} title='ComedyMovies' isSmall/>
   <Card urls={HorrorMovies} title='HorrorMovies' isSmall/>
   <Footer/>
   


  
   </>
  );
}

export default App;
