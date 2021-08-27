import {useEffect} from 'react'
import {useRouter} from 'next/router'


const NotFound = () => {
    const router = useRouter()

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/')
    //     }, 5000)
    // }, [])


    return (
        <div>
  
            <h1>NotFound</h1>
        </div>
    )
  }
  
  export default NotFound