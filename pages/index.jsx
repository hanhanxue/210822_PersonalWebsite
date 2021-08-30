import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'


import WorkTile from '../components/WorkTile'


import styles from '../components/WorkTile.module.scss'

import { getDirContent, getSingles } from '../lib/serverUtils'


const Work = ({ workSingles }) => {
  return (
    <>
      <Head>
        <title>Han Han Xue</title>
      </Head>



      <Header theme='Light' />
      


        <main className={styles.section}>
        <div className={`wrapper`}>
        <div className={styles.letterBox}>

        <div className={styles.tilesContainer}>


          {workSingles.reverse().map((w, index) => (
            <WorkTile 
              coverImage={w.coverImage} 
              title={w.title} 
              date={w.date} 
              size={w.size} 
              category={w.category} 

              client={w.client} 

              key={index} />
          ))}

            </div>

        </div>
        </div>
        </main>




      <Footer theme='Light' />

    </>
  )
}

export default Work


export const getStaticProps = async () => {
  let workSingles = []

  const directories = await getDirContent('content/work')
  workSingles = await getSingles('content/work', directories)


  //console.log(workSingles)
  return {
      props: {
          workSingles,
      }
  }
}
