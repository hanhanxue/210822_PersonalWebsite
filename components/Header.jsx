// import NextLink from 'next/link'

import styles from './Header.module.scss'

import NextLink from 'next/link'




const Header = ( {theme} ) => {




    return (

        <>
        <header className={`${styles.section} ${styles['section' + theme]}`}>
        <div className={`wrapper`}>
        <div className={`${styles.letterBox}`}>
            
            <nav className={`${styles.nav}`}>

                <div className={`${styles.introFrame}`}>
                    <span className={`body_1 ${styles.logotype}`}><NextLink href="/"><a>Han Han Xue</a></NextLink></span>
                    <pre className={`body_1 ${styles.tagline}`}> — Interdisciplinary Design</pre>
                </div>

                <ul className={`body_1 ${styles.navFrame}`}>
                    <li className={`${styles.item}`}><NextLink href="/"><a>Work</a></NextLink></li>
                    <li className={`${styles.item}`}><NextLink href="/share"><a>Share</a></NextLink></li>
                    <li className={`${styles.item}`}><NextLink href="/play"><a>Play</a></NextLink></li>
                    <li className={`${styles.item}`}><NextLink href="/info"><a>Info</a></NextLink></li>
                </ul>

            </nav>

        </div>
        </div>
        </header>


        

        <header className={`${styles.spacer}`}>
        <div className={`wrapper`}>
        <div className={`${styles.letterBox}`}>
            
            <div className={`body_1 ${styles.invisible}`}>

        &nbsp;

            </div>

        </div>
        </div>
        </header>



        </>
    )
}

export default Header




