import Head from 'next/head'
import AppLayout from '../components/AppLayaout/index'
import Form from '../components/AppLayaout/formularios/formulario'
import Footer from '../components/AppLayaout/footer'
import Nav from '../components/AppLayaout/nav'
import Link from 'next/link'

//Pagina principal
function Home() {

  return (
    <div className="Inicio">
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AppLayout>
        <Nav />
        <Footer />
      </AppLayout>



    </div>
  )
}

export default Home
