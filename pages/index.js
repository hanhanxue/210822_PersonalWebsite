
import Head from 'next/head'
import NextLink from 'next/link'
import { useState } from 'react'
import {useRouter} from 'next/router'
import moment from 'moment'


const Home = ({ }) => {



    const divStyles = {
        // color: 'blue',
        // lineHeight: 10,
        // padding: '1.5em',
        minHeight: '100vh',
        // gridTemplateColumns: '1fr 1fr 1fr',
        // gridTemplateRows: '1fr 1fr 1fr',

        // width: '100vw',

        display: 'flex',
        flexDirection: 'Column',

        maxWidth: '688px',
        margin: '0 auto',

        // display: 'grid',
        // gap: '12px',
        // height: 'fit-content',

        // justifyContent: 'center',
        // alignItems: 'center',

    }

    const divThirdStyles = {
        flex: '1 0 33%',

        display: 'flex',
        justifyContent: 'center',

        alignItems: 'center',
        textAlign: 'center',


        padding: '32px',
    }

    const linkStyles = {
        display: 'inline-block',
        color: 'inherit',
    }

    const spanStyles = {
        textDecoration: 'underline',
    }

    const divButtonFrameStyles = {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',

    }



    const buttonStyles = {
        flex: '0 0 auto',
        // color: 'inherit',
        // border: 'none',
        // padding: 0,
        // font: 'inherit',
        // outline: 'inherit',
        backgroundColor: 'red',
        
        display: 'flex',
        justifyContent: 'flex-end',
    
        alignItems: 'baseline',
        
        padding: '16px',
        // padding: '12px 16px',
        // borderRadius: '8px',
        // width: '100%',
        minWidth: '280px',
        
        // margin: 'auto',
        
        background: 'none',
        cursor: 'pointer',
        
        userSelect: 'text',
        
        // marginTop: '128px',
        color: 'black',
        // marginLeft: '128px',
        // backgroundColor: 'gray',
        

    }

    const svgStyles = {
        marginLeft: '8px',
        // fill: '#4355F9',
        fill: 'black',

    }

    const textPad = {
        padding: '16px',
    }

    const [buttonLabel, setButtonLabel] = useState(`Let's talk`)

    const router = useRouter()

    const handleOnMouseEnter = () => {
        setButtonLabel(`hello@hanhanxue.com`)
        // navigator.clipboard.writeText(`LOL`)
    }

    const handleOnMouseLeave = () => {
        setButtonLabel(`Let's talk`)
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
        <main>
        <div  style={divStyles}>


        

<div  style={divThirdStyles}>
    <div style={divButtonFrameStyles}>
 
    <button style={buttonStyles}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                  onClick={handleOnClick}>
              <h2  className={`  text-brand   `} >{buttonLabel}</h2>

              <svg style={svgStyles}
              width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_523_60)">
              <rect x="2" width="12" height="2" />
              <rect x="12" width="2" height="12" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0 13.9999V12.5858L11.293 1.29285L12.7072 2.70706L1.41424 14H0.000122249L0 13.9999Z" />
              </g>

              </svg>
          </button>
    </div>

          </div>



<div  style={divThirdStyles}>
<h1 className={`  text-brand   `}  style={textPad}  >Design & Product at <NextLink href={`https://www.supermanifold.com/`}>
          <a style={linkStyles}><u>Super Manifold</u>®</a>
          </NextLink></h1>



  </div>



<div  style={divThirdStyles}>

<h2  className={`  text-brand   `}  style={textPad} >{moment().format('YYYY')}</h2>
</div>
</div>
        </main>


        </>
    )
  }
  
  export default Home
  
  