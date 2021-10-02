import Head from 'next/head'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'


import InfoMain from '../../components/info/InfoMain'





const Info = () => {
    return (
        <>
        <Head>
            <title>Info ~ Han Han Xue</title>
        </Head>
        

        <Header theme='Light' />
        <InfoMain />
        <Footer theme='Default' />

        </>

    )
}

export default Info