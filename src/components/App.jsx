import './App.scss'
import { Outlet } from 'react-router'
import Header from './Header/header'
import Footer from './Footer/footer'

function App() {

  return (
    <div className="app-layout">
      <Header/>
      <main className="app-content">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App
