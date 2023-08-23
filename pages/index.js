
import Head from 'next/head'
import NextLink from 'next/link'


const Home = ({ }) => {

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
      <h1>Design at <NextLink href={`https://www.supermanifold.com/`}>
        <a style={linkStyles}>Super Manifold®</a>
        </NextLink></h1>
      </div>

        </>
    )
  }
  
  export default Home
  
  