import './App.css';
import NavBar from './Copmonets/Navbar/Navbar';
import Body from './Copmonets/Body/body';
import Menu from './Copmonets/Menu/Menu';
import Footer from './Copmonets/Footer/footer';
function App(){
  return(
    <div className="App">
      <NavBar/>
      <Body/>
      <Menu/>
      <Footer/>
    </div>
  )
}


export default App;

