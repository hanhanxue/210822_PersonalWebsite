

import Head from 'next/head'
import NextImage from 'next/image'



import Header from '../../components/global/Header'
import Footer from '../../components/global/Footer'



import path from 'path'



import {getDirContent} from '../../lib/serverUtils'

import PlayMain from '../../components/play/PlayMain'

const sizeOf = require('image-size')


const Play = ( {images}) => {
    return (
        <>
        <Head>
            <title>Info ~ Han Han Xue</title>
        </Head>


        <Header theme='Light' />

        <PlayMain images={images} />

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
    
    images = images.reverse().map(i => {
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

    return {
        props: {
            images: images
        }
    }
}