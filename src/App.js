import logo from './logo.svg';
import './App.css';
import './components/Header';
import Header from './components/Header';

function App() {
  return (
    <div className="App bg-pink h-screen flex flex-col" >
      {/* <image className='Image w-16 h-16 z-40' src='my-project/src/assests/tree.png'></image> */}
      {/* <div className='Header bg-blue w-screen h-16'>
        <image className='object-contain' src='./assests/tree.png'></image>
      </div> */}
      <Header/>
      
      <h1 className="text-3xl font-bold underline" >
        Hello world!
      </h1>
    </div>
  );
}

export default App;
