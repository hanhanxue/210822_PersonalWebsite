import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'


import WorkTile from '../components/WorkTile'


import styles from '../components/WorkTile.module.scss'

import { getDirectories, getSingles } from '../lib/serverUtils'


const WorkList = ({ workSingles }) => {
  return (
    <>
      <Head>
        <title>Han Han Xue</title>
      </Head>



      <Header theme='Light' />
      





      <main className={styles.section}>
        <div className={`wrapper`}>
        <div className={styles.thisElement}>

            <div className={styles.tiles}>


          {workSingles.reverse().map((w, index) => (
            <WorkTile title={w.title} date={w.date} size={w.size} category={w.category} client={w.client} key={index} />
          ))}
            {/* <WorkTile category='Concept' year='2019' title='Genesis' client='for Epoch' size='L' />
            <WorkTile category='Concept' year='2019' title='Genesis' client='for Epoch' size='M' />

            <WorkTile category='Concept' year='2019' title='Genesis' client='for Epoch' size='S' />
            <WorkTile category='Concept' year='2019' title='Genesis' client='for Epoch' size='M' />
            <WorkTile category='Concept' year='2019' title='Genesis' client='for Epoch' size='S' /> */}




            </div>

        </div>
        </div>
        </main>




      <Footer />

    </>
  )
}

export default WorkList


export const getStaticProps = async () => {
  let workSingles = []

  const directories = await getDirectories('content/work')
  workSingles = getSingles('content/work', directories)

  return {
      props: {
          workSingles,
      }
  }
}
