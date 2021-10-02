

import Head from 'next/head'


import { getDirContent, getSingles } from '../lib/serverUtils'


import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import WorkList from '../components/work/WorkList'






const Work = ({ workSingles }) => {
  return (
    <>
      <Head>
        <title>Han Han Xue</title>
      </Head>

      <Header theme='Default' />

      <WorkList workSingles={workSingles} />

      <Footer theme='Default' />
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
