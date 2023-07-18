import Header from './header/page'
import MainView from './main/page'
import Footer from './footer/page'

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <MainView />
      <Footer />
    </div>
  )
}
