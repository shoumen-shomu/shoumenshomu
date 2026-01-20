import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayouts = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayouts