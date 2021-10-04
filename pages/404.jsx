

// 00 Vendor Libs
import {useEffect} from 'react'
import {useRouter} from 'next/router'

// 01 Vendor Components

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
        }, 20000)
    }, [])


    return (
        <>
        <Header theme='Default' />

        <h1>NotFound</h1>
  
        <Footer theme='Default' />
        </>

    )
  }
  
  export default NotFound