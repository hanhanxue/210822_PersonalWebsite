
import styles from './PlayMain.module.scss'

import NextImage from 'next/image'


const PlayMain = ({images}) => {
    return (  
    
    <main className={`${styles.section}`}>
    <div className={`${styles.wrapper} `}> 
    <div className={`${styles.letterBox}`}>
    
    
    <div className={`${styles.tilesContainer}`}>
    
    {images.map((i, index) => ( 
    <div className={`${styles.image}`} key={index}>
    <NextImage src={`/content/play/${i.image}`} width={i.dimensions.width} height={i.dimensions.height} />
    </div>
    ))}
    
    </div>
    
    
    </div>
    </div>
    </main>
    
    
    
          );
}
 
export default PlayMain;