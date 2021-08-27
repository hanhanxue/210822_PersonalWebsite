

import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ShareTile from '../../components/ShareTile'



import { getDirectories, getSingles } from '../../lib/serverUtils'



import styles from '../../components/ShareTile.module.scss'



const ShareList = ( { shareSingles }) => {




    return (
        <>
        <Head>
            <title>Share ~ Han Han Xue</title>
        </Head>
        

        <Header theme='Light' />


        <main className={styles.section}>
        <div className={`${styles.wrapper}`}>
        <div className={styles.thisElement}>

            <div className={styles.tiles}>

            {shareSingles.map((s, index) => (
                
                <ShareTile title={s.title} date={s.date} size={s.size} category={s.category} key={index} />

            ))}



            </div>

        </div>
        </div>
        </main>



        <Footer />

        </>

    )
}

export default ShareList









export const getStaticProps = async () => {

    let shareSingles = []

    const directories = await getDirectories('content/share')
    shareSingles = getSingles('content/share', directories)



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


