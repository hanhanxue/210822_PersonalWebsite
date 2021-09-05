

import Head from 'next/head'


import { getDirContent, getSingles } from '../lib/serverUtils'


import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import WorkMain from '../components/work/WorkMain'






const WorkPage = ({ workSingles }) => {
  return (
    <>
      <Head>
        <title>Han Han Xue</title>
      </Head>

      <Header theme='Light' />
      <WorkMain workSingles={workSingles} />
      <Footer theme='Light' />
    </>
  )
}

export default WorkPage












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
