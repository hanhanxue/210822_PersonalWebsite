import Head from 'next/head'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'


import InfoMain from '../../components/info/InfoMain'

const InfoPage = () => {
    return (
        <>
        <Head>
            <title>Info ~ Han Han Xue</title>
        </Head>
        

        <Header theme='White' />
        <InfoMain />
        <Footer theme='Light' />

        </>

    )
}

export default InfoPage