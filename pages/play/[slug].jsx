
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType, GetStaticPropsContext } from 'next'


interface Ninja {
    id: number,
    name: string,
    username: string,

    email: string,
    website: string,

}



export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((ninja:Ninja) => {
        return {
            params: { slug: ninja.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }

}

export const getStaticProps = async (context : GetStaticPropsContext) => {
    const id = context.params?.slug

    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: {ninja: data}
    }


}

const Details = ( { ninja }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <h1>Hi</h1>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
      
        </div>
    )
}

export default Details