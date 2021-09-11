



import ShareTile from './ShareTile'


import styles from './ShareList.module.scss'




const ShareMain = ({shareSingles}) => {
    return (        
         <main className={styles.section}>
        <div className={styles.wrapper}>
        <div className={styles.letterBox}>

            <div className={styles.tilesContainer}>

            {shareSingles.map((s, index) => (
                
                <ShareTile 
                coverImage={s.coverImage} 
                title={s.title} 
                date={s.date} 
                size={s.size} 
                categories={s.categories} 

                key={index} />

            ))}



            </div>

        </div>
        </div>
        </main>
 );
}
 

export default ShareMain