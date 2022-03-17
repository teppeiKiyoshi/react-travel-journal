import './App.css';
import ContentContainer from './components/ContentContainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;
