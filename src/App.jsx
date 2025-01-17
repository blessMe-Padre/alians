import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App({ children }) {
  return (
    <div className='page-wrapper'>
      <ScrollToTop />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default App
