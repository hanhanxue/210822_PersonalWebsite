


// 00 Vendor Libs


// 01 Vendor Components

// 02 My Libs
import {github, instagram, linkedin, twitter } from '../../lib/globalVars'

// 03 My Components
import MyNextLink from '../global/MyNextLink'

// 04 My Styles
import styles from './InfoMain.module.scss'






const InfoSections = () => {

return (

        <>
        <section className={`section sectionLight`}>
        <div className={`wrapper wrapperDefault`}>
        <div className={`letterbox_64`}>

            <div className={`columns`}>

                <div className={`column column_618`}>
                    <p className={`title_2 columnHeader`}>Han Han Xue is an interdisciplinary designer from Montreal, Canada.</p>
                    <p className={`title_2`}>Previously at <MyNextLink href='https://www.lyft.com/' linkStyle='invisible'>Lyft</MyNextLink> and <MyNextLink href='https://www.framestore.com/?language=en' linkStyle='invisible'>Framestore</MyNextLink> before that, he is currently working on autonomous systems at <MyNextLink href='https://www.woven-planet.global/en/company-information' linkStyle='invisible'>Woven Planet</MyNextLink> in San Francisco.</p>
                </div>

                <div className={`columns column_382 ${styles.contactsList}`}>


                                <div className={`column column_4x columnForceBottomMargin`}>
                                    <h2 className={`title_2 columnHeader`}>Contact</h2>
                                    <ul className={`title_3`}>
                                        <li><MyNextLink href='mailto:hello@hanhanxue.com'>hello@hanhanxue.com</MyNextLink></li>
                                    </ul>
                                </div>


                                <div className={`column column_4x`}>
                                    <h2 className={`title_2 columnHeader`}>Social</h2>
                                    <ul className={`title_3`}>
                                        <li><MyNextLink href={`${github}`}>Github</MyNextLink></li>
                                        <li><MyNextLink href={`${instagram}`}>Instagram</MyNextLink></li>
                                        <li><MyNextLink href={`${linkedin}`}>LinkedIn</MyNextLink></li>
                                        <li><MyNextLink href={`${twitter}`}>Twitter</MyNextLink></li>
                                    </ul>
                                </div>


                </div>

            </div>

        </div>
        </div>
        </section>


        <section className={`section sectionDefault`}>
        <div className={`wrapper wrapperDefault`}>
        <div className={`letterbox_64`}>

        <div className={`columns`}>
            <div className={`column column_4x`}>
                <h2 className={`title_2 columnHeader columnHeaderCentered`}>Professional Experience</h2>
                <ul>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>Aug 2021 — Present</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Senior Product Designer ~ Woven Planet</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>San Francisco ~ USA</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>Nov 2017 — Jul 2021</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Product Designer ~ Lyft</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>San Francisco ~ USA</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>May 2016 — Oct 2017</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>FX Technical Director ~ Framestore</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Montreal ~ Canada</div>
                    </li>

                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>Nov 2014 — Feb 2016</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>3D Generalist ~ Moment Factory</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Montreal ~ Canada</div>
                    </li>
                    <li className={`${styles.flexRow}`}>
                        <div className={`body_1 ${styles.flexRowItemLeft}`}>May 2012 — Aug 2012</div>
                        <h3 className={`title_3 ${styles.flexRowItemCenter}`}>Intern Architect ~ MAD Architects</h3>
                        <div className={`body_1 ${styles.flexRowItemRight}`}>Beijing ~ China</div>
                    </li>
                </ul>
            </div>
            </div>

        </div>
        </div>
        </section>


        <section className={`section sectionDefault`}>
        <div className={`wrapper wrapperDefault`}>
        <div className={`letterbox_64`}>

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





        <section className={`section sectionDefault`}>
        <div className={`wrapper wrapperDefault`}>
        <div className={`letterbox_64`}>

            <div className={`columns`}>
                <div className={`column column_2x column_phoneBottom128`}>
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