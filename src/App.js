import logo from './logo.svg';
import './App.css';
import './components/Header';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App h-screen flex flex-col " >
      {/* <image className='Image w-16 h-16 z-40' src='my-project/src/assests/tree.png'></image> */}
      {/* <div className='Header bg-blue w-screen h-16'>
        <image className='object-contain' src='./assests/tree.png'></image>
      </div> */}
      <Header/>

      <div className="background-container flex flex-col bg-gradient-to-r from-pink to-yellow" >


      <div className='ImageDiv h-screen grid grid-rows-1 justify-center content-center'>
        <img className="Logo object-contain h-60 w-60 pl-2" src="tree.png"></img>
      </div>

      <div></div>



      </div>




      
      <div className="footerDiv content-end">
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
