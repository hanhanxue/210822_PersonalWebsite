

import styles from './WorkMain.module.scss'

import { WorkTileProject, WorkTileBulletin } from './WorkTile'
//import BulletinTile from './BulletinTile'


const WorkMain = ( {workSingles} ) => {
    return (

        <main className={styles.section}>
        <div className={`wrapper`}>
        <div className={styles.letterBox}>



        <div className={styles.tilesContainer}>


            {workSingles.reverse().map((w, index) => {
            if(w.size !=='B') {
            return (
            <WorkTileProject 
            coverImage={w.coverImage} 
            title={w.title} 
            date={w.date} 
            size={w.size} 
            categories={w.categories} 

            client={w.client} 

            key={index} />
            )
            } else if (w.size ==='B') {
            return (
            <WorkTileBulletin 
            coverImage={w.coverImage} 
            title={w.title} 
            date={w.date} 
            size='S' 
            category={w.category} 

            subtitle={w.subtitle}
            client={w.client} 

            article = {w.article}

            key={index} />
            )
            }
            }

            )}

            </div>



        </div>
        </div>
        </main>

      );
}
 
export default WorkMain