


// 00 Vendor Libs


// 01 Vendor Components

import Head from 'next/head'

// 02 My Libs


import { getDirContent, getSingles, genCustomData, getMatter } from '../../lib/serverUtils'


// 03 My Components
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'

import ShareTile from '../../components/share/ShareTile'



// 04 My Styles


const Share = ( { shareSingles, shares }) => {




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

    let shareSingles = []

    let shares = []

    const directories = getDirContent('/content/share')

    directories.map(directory => {
        const {content, data} = getMatter('/content/share', directory)

        shares.push(  genCustomData('/content/share', directory, data)  )
    })

    shares = shares.reverse()


    shareSingles = await getSingles('content/share', directories)


    return {
        props: {
            shareSingles,
            shares,
        }
    }
}






// export const getStaticProps = async () => {

//     const root = process.cwd()
//     const directories = fs.readdirSync(path.join(root, 'content/share'))



//     let shareSingles = []

//     directories.forEach(d => {

//         let shareSingle = {}
//         const dateSizeTitle = d.split('_')

//         const filepath = path.join(root, 'content/share', d, 'index.mdx')
//         const source = fs.readFileSync(filepath, 'utf8')
//         const { content, data } = matter(source)



//         shareSingle.date = dateSizeTitle[0]
//         shareSingle.size = dateSizeTitle[1]
//         shareSingle.title = dateSizeTitle[2]
//         shareSingle.category = data.category


//         shareSingles.push(shareSingle)

//     });


//     return {
//         props: {
//             shareSingles,
//         }
//     }
// }


