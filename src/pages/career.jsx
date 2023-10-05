import React from 'react'
import careerOne from '../images/careerOne.jpg'
import careerTwo from '../images/careerTwo.jpg'


export default function Career() {
  return (
    <section id='career'>
        <h3>CAREER</h3>

        <div className='career_top'>
            <div className='writeUp'>
                <div className='writeUp_Child'>
                    <h3>Likable and dedicated IT consultant with over 5 years of experience in a fast-paced fin-tech company. Eager to offer superb analytical and computer skills to help ABC Inc grow its client base. In previous roles recognized for top company-wide quality satisfaction rating (over 99%). Also, reduced client wait time by 20% and boosted client satisfaction ratings by more than 40% in a single quarter. - Zety</h3>
                </div>

                <img src={careerOne} alt="" width={400}/>
            </div>
        </div>


        <div className='career_top'>
            <div className='writeUpTwo'>
                <img src={careerTwo} alt="" width={400}/>

                <div className='writeUp_Child'>
                    <h3>Personable IT consultant with 4+ years of experience in a global technology firm. CompTIA A+ Certification. Scored region-leading QST rating based on internal review (98.76%). Seeking to leverage solid technical skills and abilities to advance my career as the next IT consultant for Linsang Group.</h3>
                </div>
            </div>
        </div>

    </section>
  )
}
