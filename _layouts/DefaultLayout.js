import Head from 'next/head'
import Navbar from '@includes/Navbar'
import Footer from '@includes/Footer'

export default function DefaultLayout(props) {
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
            </Head>
            <Navbar />
            <div style={{marginTop: '85px'}}>
                {props.children}
            </div>
            <Footer />
        </main>
    )
}