

import Head from 'next/head'

import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'
import ShareList  from '../../components/share/ShareList'



import { getDirContent, getSingles } from '../../lib/serverUtils'





const Share = ( { shareSingles }) => {




    return (
        <>
        <Head>
            <title>Share ~ Han Han Xue</title>
        </Head>
        

        <Header theme='Light' />

        <ShareList shareSingles={shareSingles} />

        <Footer theme='Light' />

        </>

    )
}

export default Share









export const getStaticProps = async () => {

    let shareSingles = []

    const directories = await getDirContent('content/share')
    shareSingles = await getSingles('content/share', directories)



    return {
        props: {
            shareSingles,
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


