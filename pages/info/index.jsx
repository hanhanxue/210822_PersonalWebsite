
// 00 Vendor Libs


// 01 Vendor Components


// 02 My Libs


// 03 My Components
import Head from 'next/head'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'


import InfoMain from '../../components/info/InfoMain'

// 04 My Styles




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