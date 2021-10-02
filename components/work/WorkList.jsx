

import { WorkTileProject, WorkTileBulletin } from './WorkTile'



const WorkList = ( {workSingles} ) => {
    return (

        <main className={`section sectionDefault`}>
        <div className={`wrapper workList`}>
        <div className={`letterBox_64_128`}>



        <div className={`tilesContainer tilesContainerFlex`}>


            {workSingles.map((w, index) => {
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
 
export default WorkList