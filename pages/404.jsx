

// 00 Vendor Libs
import {useEffect} from 'react'
import {useRouter} from 'next/router'

// 01 Vendor Components
import Head from 'next/head'
import NextLink from 'next/link'
// 02 My Libs

// 03 My Components
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'

// 04 My Styles





const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    })

    const styles = {
        // color: 'blue',
        // lineHeight: 10,
        // padding: '1.5em',
        height: '100vh',
        width: '100vw',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

    const linkStyles = {
        color: 'inherit',
        textDecoration: 'underline',

    }


    return (
      <>
        <Head>
        <title>Han Han Xue</title>
        {/* <meta name="description" content="Han Han Xue — Interdisciplinary Design" /> */}
      </Head>

      <div className={`  text-brand   `}  style={styles}>
      <h1>404 Not Found</h1>
      </div>

        </>
    )

  }
  
  export default NotFound




  

//   return (
//     <>
//     <Header theme='Default' />

//     <h1>NotFound</h1>

//     <Footer theme='Default' />
//     </>

// )