

// 00 Vendor Libs


// 01 Vendor Components

import NextImage from 'next/image'


// 02 My Libs


// 03 My Components


// 04 My Styles
import styles from './MyNextImage.module.scss'






const MyNextImage = ( {source, width, height, divClasses, imgClasses} ) => {



    return ( 
        <div className={`${styles.nextImageDiv} ${styles[divClasses]}`}>
            <NextImage 
                src={source}
                width={width} 
                height={height} 
                className={`${styles[imgClasses]}`}
                />
        </div>
     );
}
 
export default MyNextImage;

