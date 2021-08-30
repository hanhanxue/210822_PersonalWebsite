
// NextJS
import Head from 'next/head'
import NextImage from 'next/image'


// HHX JSX
import Header from '../../components/Header'
import Footer from '../../components/Footer'


// HHX JS


// HHX SCSS
// import fs from 'fs'
import path from 'path'

// EXTERNAL


import {getDirContent} from '../../lib/serverUtils'

import styles from '../../components/PlaySections.module.scss'

const sizeOf = require('image-size')


const Play = ( {images}) => {
    return (
        <>
        <Head>
            <title>Info ~ Han Han Xue</title>
        </Head>


        <Header theme='Light' />

<main className={`${styles.section}`}>
<div className={`wrapper `}> 
<div className={`${styles.letterBox}`}>


<div className={`${styles.tilesContainer}`}>

{images.reverse().map(i => ( 
            <div className={`${styles.image}`}>
            <NextImage src={`/content/play/${i.image}`} width={i.dimensions.width} height={i.dimensions.height} />
            </div>
            ))}

</div>


</div>
</div>
</main>



      
         

        <Footer theme='Light' />

        </>
     );
}

export default Play;


export const getStaticProps = async () => {
    // const root = process.cwd()
    // const filepath = path.join(root, 'public/content/play')
    // const files = fs.readdirSync(filepath)

    let images = await getDirContent('/content/play')
    // 
    images = images.map(i => {
        const root = process.cwd()
        const filepath = path.join(root, 'public/content/play', i)
        //console.log(filepath)

        const dimensions = sizeOf(filepath)
        // console.log(dimensions)

        const MAX_WIDTH = 960
        const MAX_HEIGHT = 760

        let ratio

        if (dimensions.width > MAX_WIDTH) {
            ratio = dimensions.height / dimensions.width
            dimensions.width = MAX_WIDTH
            dimensions.height = dimensions.width * ratio
        }
        if (dimensions.height > MAX_HEIGHT) {
            ratio = dimensions.width / dimensions.height
            dimensions.height = MAX_HEIGHT
            dimensions.width = dimensions.height * ratio
        }


        return {
            image: i,
            dimensions: dimensions
        }
    
    })
    //console.log(images)

    return {
        props: {
            images: images
        }
    }
}