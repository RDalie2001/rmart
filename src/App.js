import './App.css';
import Header from './components/Header';

import { slides } from './data/carouselSlides'
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
        <Header />
        <Carousel data={slides}/>
    </div>
  );
}

export default App;
