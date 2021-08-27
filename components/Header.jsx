// import NextLink from 'next/link'

import styles from './Header.module.scss'

import NextLink from 'next/link'




const Header = ( {theme} ) => {

    const themeSwitch = (param) => {

        switch(param){
            case 'Light':
                // console.log('light theme')
                // break;

            case 'Dark':
                // console.log('dark theme')
                // break;

            default:
                // console.log('white theme')
        }
    }

    // let sectionClassName = `${styles.section} ${styles[theme]}`
    // if(theme === 'Light') {
    //     sectionClassName = `${styles.section} ${styles.light}`
    // }
    // else if (theme === 'Dark') {
    //     sectionClassName = `${styles.section} ${styles.dark}`
    // }
    // else {
    //     sectionClassName = `${styles.section} ${styles.white}`
    // }
    // styles.sectionLight



    return (

        <>
        <section className={`${styles.section} ${styles['section' + theme]}`}>
        <header className={`wrapper`}>
        <nav className={styles.thisElement}>
            
            <ul className={`body_1 ${styles.ulist}`}>
                <li className={`${styles.item}`}>
                    <NextLink href="/"><a>Han Han Xue</a></NextLink>
                    <pre className={`body_1 ${styles.tagline}`}> — Interdisciplinary Design</pre>
                </li>
        
                <li className={`${styles.item}`}><NextLink href="/"><a>Work</a></NextLink></li>
                <li className={`${styles.item}`}><NextLink href="/share"><a>Share</a></NextLink></li>
                <li className={`${styles.item}`}><NextLink href="/play"><a>Play</a></NextLink></li>
                <li className={`${styles.item}`}><NextLink href="/info"><a>Info</a></NextLink></li>
            </ul>

        </nav>
        </header>
        </section>


        

        <section className={`${styles.spacer}`}>
        <header className={`wrapper`}>
        <nav className={styles.thisElement}>
            
            <ul className={`body_1 ${styles.ulist}`}>
                <li className={`${styles.item}`}>
                    Han Han Xue
                    <pre className={`body_1 ${styles.tagline}`}> — Interdisciplinary Design</pre>
                </li>

                <li className={`${styles.item}`}>Work</li>
                <li className={`${styles.item}`}>Share</li>
                <li className={`${styles.item}`}>Play</li>
                <li className={`${styles.item}`}>Info</li>
            </ul>

        </nav>
        </header>
        </section>



        </>
    )
}

export default Header




