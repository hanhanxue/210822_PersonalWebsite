
// 00 Vendor Libs


// 01 Vendor Components

import Head from 'next/head'


// 02 My Libs

import { getDirContent, getMatter, genCustomData } from '../lib/serverUtils'


// 03 My Components

import Footer from '../components/global/Footer'
import Header from '../components/global/Header'


import { ProjectTile, BulletinTile } from '../components/work/WorkTile'


// 04 My Styles







const Work = ({ works }) => {
  return (
    <>
      <Head>
        <title>Han Han Xue</title>
      </Head>

      <Header theme='Default' />

      {/* <WorkList works={works} /> */}

      <main className={`section sectionDefault`}>
        <div className={`wrapper workList`}>
        <div className={`letterbox_64_128`}>

        <div className={`tilesContainer tilesContainerFlex`}>


            {works.map((work, index) => {
            if(work.tileType !=='Bulletin') {
            return (
                    <ProjectTile 
                        tileType={work.tileType} 

                        coverImage={work.coverImage} 

                        categories={work.categories} 
                        date={work.date} 
                        
                        title={work.title} 
                        client={work.client} 

                        slug={work.slug}

                        key={index} />
                )
            } else {
              return (
                <BulletinTile 
           

                    date={work.date} 

                    title={work.title} 
                    subtitle={work.subtitle}


                    bulletin = {work.bulletin}

                    key={index} />
            )
            }
            }

            )}

            </div>



        </div>
        </div>
        </main>


      <Footer theme='Default' />
    </>
  )
}

export default Work






export const getStaticProps = async () => {


  let works = []

  const directories = getDirContent('/content/work')

  directories.map(directory => {
    const {content, data} = getMatter('/content/work', directory)


    works.push(  genCustomData('/content/work', directory, data)  )

  })

  works = works.reverse()



  return {
      props: {

          works,
      }
  }
}
