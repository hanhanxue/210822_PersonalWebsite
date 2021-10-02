



import ShareTile from './ShareTile'




const ShareList = ({shareSingles}) => {
    return (        
         <main className={`section sectionDefault`}>
        <div className={`wrapper shareList`}>
        <div className={`letterBox_48`}>

            <div className={`tilesContainer tilesContainerFlex`}>

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
 

export default ShareList