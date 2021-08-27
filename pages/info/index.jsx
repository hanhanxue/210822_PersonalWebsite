import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'


import InfoSections from '../../components/InfoSections'

const Info = () => {
    return (
        <>
        <Head>
            <title>Info ~ Han Han Xue</title>
        </Head>
        

        <Header />
        <InfoSections />
        <Footer />

        </>

    )
}

export default Info