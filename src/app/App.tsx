import './App.css'
import Header from '../components/header/Header'
import Stays from '../components/stays/Stays'
import Footer from '../components/Footer'
import {store} from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Stays />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
