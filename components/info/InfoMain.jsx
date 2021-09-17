import NextLink from 'next/link'
import MyLink from '../global/MyLink'

import styles from './InfoMain.module.scss'



const InfoSections = () => {

return (

        <>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={`wrapper`}>
        <div className={styles.thisElement}>

            <div className={`columns`}>

                <div className={`column column_2x`}>
                    <p className={`title_2 columnHeader`}>Han Han Xue is an interdisciplinary designer from Montreal, Canada.</p>
                    <p className={`title_2`}>He is currently working on autonomous vehicles at <MyLink href='/'>Woven Planet</MyLink> in New York City.</p>
                </div>

                <div className={`columns column_2x`}>


                                <div className={`column column_2x columnForceBottomMargin`}>
                                    <h2 className={`title_2 columnHeader`}>Contact</h2>
                                    <ul className={`title_3`}>
                                        <li><MyLink href='mailto:hello@hanhanxue.com'>hello@hanhanxue.com</MyLink></li>
                                    </ul>
                                </div>
                                <div className={`column column_2x`}>
                                    <h2 className={`title_2 columnHeader`}>Social</h2>
                                    <ul className={`title_3`}>
                                        <li><MyLink href='/'>Github</MyLink></li>
                                        <li><MyLink href='/'>Instagram</MyLink></li>
                                        <li><MyLink href='/'>LinkedIn</MyLink></li>
                                        <li><MyLink href='/'>YouTube</MyLink></li>
                                    </ul>
                                </div>


                </div>

            </div>

        </div>
        </div>
        </section>


        <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={`wrapper`}>
        <div className={styles.thisElement}>

        <div className={`columns`}>
            <div className={`column column_4x`}>
                <h2 className={`title_2 columnHeader columnHeaderCentered`}>Work Experience</h2>
                <ul>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>New York ~ USA</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Product Designer ~ Woven Planet</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Aug 2021 — Present</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>San Francisco ~ USA</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Product Designer ~ Lyft</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Nov 2017 — Jul 2021</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>Montreal ~ Canada</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>FX Technical Director ~ Framestore</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>May 2016 — Oct 2017</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>Montreal ~ Canada</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Visual Designer ~ Moment Factory</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Jun 2015 — Feb 2016</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>Montreal ~ Canada</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>3D Generalist ~ Moment Factory</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Nov 2014 — Apr 2015</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>Beijing ~ China</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Architectural Intern ~ MAD Architects</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>May 2012 — Aug 2012</div>
                    </li>
                </ul>
            </div>
            </div>

        </div>
        </div>
        </section>


        <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={`wrapper`}>
        <div className={styles.thisElement}>

        <div className={`columns`}>
        <div className={`column column_4x`}>
        <h2 className={`title_2 columnHeader columnHeaderCentered`}>Select Projects</h2>
                <ul>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>Product Designer</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Level 5 Developer Tools</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Lyft</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>FX Technical Director</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Mary Poppins Returns (2018)</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Framestore</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>3D Modeler</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Blade Runner 2049 (2017)</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Framestore</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>3D Modeler</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Beauty and the Beast (2017)</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Framestore</div>
                    </li>
                </ul>
            </div>
            </div>

        </div>
        </div>
        </section>





        <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={`wrapper`}>
        <div className={styles.thisElement}>

            <div className={`columns`}>
                <div className={`column column_2x`}>
                    <h2 className={`title_2 columnHeader columnHeaderCentered`}>Friends</h2>
                    <ul>
                        <li className={`title_3 ${styles.row}`}>Nicolas Girard ~ Designer</li>
                        <li className={`title_3 ${styles.row}`}>Samuel Poirier ~ 3D Modeler</li>
                        <li className={`title_3 ${styles.row}`}>Yunus Balcioglu ~ FX Technical Director</li>
                    </ul>
                </div>
                <div className={`column column_2x`}>
                    <h2 className={`title_2 columnHeader columnHeaderCentered`}>Resources</h2>
                    <ul>
                        <li className={`title_3 ${styles.row}`}>Houdini Wiki</li>
                        <li className={`title_3 ${styles.row}`}>Sheet Music Library</li>
                        <li className={`title_3 ${styles.row}`}>Spotify Playlists</li>
                        <li className={`title_3 ${styles.row}`}>Vimeo Likes</li>
                    </ul>
                </div>
            </div>
            
        </div>
        </div>
        </section>
        </>


    )
}


export default InfoSections