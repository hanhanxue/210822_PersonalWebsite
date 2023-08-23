
import Head from 'next/head'
import NextLink from 'next/link'
import { useState } from 'react'
import {useRouter} from 'next/router'


const Home = ({ }) => {

    const divStyles = {
        // color: 'blue',
        // lineHeight: 10,
        // padding: '1.5em',
        height: '100vh',
        width: '100vw',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        flexDirection: 'Column',

    }

    const linkStyles = {
        color: 'inherit',
    }

    const spanStyles = {
        textDecoration: 'underline',
    }

    const buttonStyles = {
        // color: 'inherit',
        // border: 'none',
        // padding: 0,
        // font: 'inherit',
        // outline: 'inherit',
        
        display: 'flex',
        alignItems: 'center',
        
        padding: '12px 16px',
        borderRadius: '8px',
        
        background: 'none',
        cursor: 'pointer',
        
        userSelect: 'text',
        
        marginTop: '128px',
        // marginLeft: '128px',
        // backgroundColor: 'gray',
        

    }

    const svgStyles = {
        marginLeft: '8px',

    }

    const [buttonLabel, setButtonLabel] = useState(`Let's Chat`)

    const router = useRouter()

    const handleOnMouseEnter = () => {
        setButtonLabel(`hello@hanhanxue.com`)
        navigator.clipboard.writeText(`LOL`)
    }

    const handleOnMouseLeave = () => {
        setButtonLabel(`Let's Chat`)
    }

    const handleOnClick = () => {
        router.push(`mailto:hello@hanhanxue.com`)
    }


    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/')
    //     }, 3000)
    // })

    return (
      <>
        <Head>
        <title>Han Han Xue</title>
        {/* <meta name="description" content="Han Han Xue — Interdisciplinary Design" /> */}
      </Head>

      <div  style={divStyles}>



      <h1 className={`  text-brand   `}>Design at <NextLink href={`https://www.supermanifold.com/`}>
        <a style={linkStyles}><span style={spanStyles}>Super Manifold</span>®</a>
        </NextLink></h1>


        <button style={buttonStyles}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onClick={handleOnClick}
        
        >
            <h2  className={`  text-brand   `}>{buttonLabel}</h2>

            <svg style={svgStyles}
            width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_523_60)">
            <rect x="2" width="12" height="2" fill="black"/>
            <rect x="12" width="2" height="12" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.9999V12.5858L11.293 1.29285L12.7072 2.70706L1.41424 14H0.000122249L0 13.9999Z" fill="black"/>
            </g>

            </svg>
        </button>
   
      </div>

        </>
    )
  }
  
  export default Home
  
  