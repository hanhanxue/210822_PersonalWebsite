import Head from 'next/head'

import Image from 'next/image'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Only runs at build time
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: Ninja[] = await res.json()

    return {
        props: { ninjas: data }
    }
}

interface Ninja {
    id: number,
    name: string,
    username: string,

}


const Play = ( { ninjas }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
<>
        <Head>
        <title>Play ~ Han Han Xue</title>
      </Head>


      <Header />
        <div>
            <Image src="/vercel.svg" width={128} height={128} />
            <h1>Play</h1>
            {ninjas.map((ninja:Ninja) => (
                <Link href={`/play/${ninja.id}`} key={ninja.id}>
                    <a>
                        <h3>
                            {ninja.name}
                        </h3>
                    </a>
                    </Link>
            ))}
        </div>

        <Footer />
        </>
    )
}

export default Play