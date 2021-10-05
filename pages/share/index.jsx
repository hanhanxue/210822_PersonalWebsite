


// 00 Vendor Libs


// 01 Vendor Components

import Head from 'next/head'

// 02 My Libs


import { getDirContent, getMatter,  genCustomData } from '../../lib/serverUtils'


// 03 My Components
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'

import ShareTile from '../../components/share/ShareTile'



// 04 My Styles






const Share = ( { shares }) => {




    return (
        <>
        <Head>
            <title>Share ~ Han Han Xue</title>
        </Head>
        

        <Header theme='Default' />

        <main className={`section sectionDefault`}>
        <div className={`wrapper shareList`}>
        <div className={`letterbox_64_128`}>

            <div className={`tilesContainer tilesContainerFlex`}>

            {shares.map((share, index) => (
                
                <ShareTile 
                tileType={share.tileType}

                coverImage={share.coverImage} 

                categories={share.categories} 
                date={share.date} 
     
                title={share.title} 

                slug={share.slug}

                key={index} />

            ))}



            </div>

        </div>
        </div>
        </main>

        <Footer theme='Default' />

        </>

    )
}

export default Share









export const getStaticProps = async () => {


    let shares = []

    const directories = getDirContent('/content/share')
    directories.map(directory => {
        const {content, data} = getMatter('/content/share', directory)

        shares.push(  genCustomData('/content/share', directory, data)  )
    })

    shares = shares.reverse()


    return {
        props: {
            shares,
        }
    }
}







