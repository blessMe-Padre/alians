import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App({ children }) {
  return (
    <div className='page-wrapper'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default App
