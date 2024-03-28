
import './App.css';
import Info from './componenets/detailInfo';
import Started from './componenets/getStarted';
import Header from './componenets/header';
import Navbar from './componenets/navbar';
import Testimonals from './componenets/testimonals';
import Footer from './componenets/footer';



function App() {

  return (
    <div className="App">
        <div className='mx-auto w-[350px] md:w-4/5 overflow-x-hidden md:overflow-x-visible '>
            <Navbar />
            <Header />
            <Info />
            <Testimonals />
            <Started />
            <Footer />
        </div>  
    </div>
  );
}

export default App;
