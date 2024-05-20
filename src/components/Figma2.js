import React from 'react'
import styles from '../Styles/Figma2.module.css'
import badge1 from '../images/circlebadge.svg'
import rakhi from '../images/rakhi.svg'
import certificate from '../images/certificate.svg'
import hat from '../images/hat.svg'
import profile from '../images/profile1.svg'
import star from '../images/star.svg'
import trophy1 from '../images/trophy1.svg'
import referal from '../images/referal.svg'
import styles1 from '../Styles/Figma1.module.css'
import { useState } from 'react';
import logo from '../images/maincrown.svg'

import badge from '../images/badge.svg'
import linkdn from '../images/linkdn.svg'
import paytm from '../images/paytm.svg'
import speaker from '../images/speaker.svg'
import trophy from '../images/trophy.svg'
import logo2 from '../images/crown.svg'



const data = [
    {
        Name:'Suraj Khandwal',
        Address:'Rohini, Delhi',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal ',
        Address:'Bhiwadi, Rajasthan',
        profileimg:profile,
        points:'8300',
    },
    {
        Name:'Suraj Khandwal ',
        Address:'Gurugram, Haryana',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Gurugram, Haryana',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Gurugram, Haryana',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Najafgarh, Delhi',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Jaipur, Rajasthan',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Jaipur, Rajasthan',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Jaipur, Rajasthan',
        profileimg:profile,
        points:'9300',
    },
]

const Figma2 = () => {

    const [selectedOption, setSelectedOption] = useState('monthly');
    const toggleSelection = (option) => {
        setSelectedOption(option);
      };
     console.log(selectedOption);

  return (
    <>
   <div className={styles.mainparent}>
   <div className={styles.parent}>
        <div className={styles.heading}>Weekly Top Leaderboard</div>
        <div className={styles.container}>
            <div className={styles.review}>
                <div className={styles.reviewtext}>Top Reviews</div>
                 <div className={styles.reviewcont}>
                    
                    <div className={styles.reviewleft}>
                        <div className={styles.reviewtopcont}> 
                        <img src={profile} alt='profileimage'></img>
                      
                        <div className={styles.reviewname}>Suraj Khandwal</div>
                        <div className={styles.reviewstate}>Jaipur, Rajsthan</div>
                        
                        </div>
                        <div className={styles.badgecont}>
                            
                                <img src={certificate}></img>
                           
                           
                                <img  src={badge1}></img>
                           
                            
                                <img src={rakhi}></img>
                            
                            
                                <img src={hat}></img>
                            
                        </div>
                    </div>
                    <div className={styles.reviewright}>
                        <div className={styles.rightcont}>
                            <img src={star}></img>
                            <h3>35</h3>
                            <div>Approved Reviews</div>
                        </div>
                        <div className={styles.reviewparagraph}>
                        “The annual is named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time... The annual is named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time..
                        </div>
                      <div className={styles.paragraphsubheading}>
                      Kingston School of Management and Science
                      </div>
                    </div>
                 </div>

                 <div className={styles.reviewcont}>
                    
                    <div className={styles.reviewleft}>
                        <div className={styles.reviewtopcont}> 
                        <img src={profile} alt='profileimage'></img>
                      
                        <div className={styles.reviewname}>Suraj Khandwal</div>
                        <div className={styles.reviewstate}>Jaipur, Rajsthan</div>
                        
                        </div>
                        <div className={styles.badgecont}>
                            
                                <img src={certificate}></img>
                           
                           
                                <img  src={badge1}></img>
                           
                            
                                <img src={rakhi}></img>
                            
                            
                                <img src={hat}></img>
                            
                        </div>
                    </div>
                    <div className={styles.reviewright}>
                        <div className={styles.rightcont}>
                            <img src={star}></img>
                            <h3>35</h3>
                            <div>Approved Reviews</div>
                        </div>
                        <div className={styles.reviewparagraph}>
                        “The annual is named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time... The annual is named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time..
                        </div>
                      <div className={styles.paragraphsubheading}>
                      Kingston School of Management and Science
                      </div>
                    </div>
                 </div>
            </div>
            <div className={styles.referal}>
                   <div className={styles.reviewtext}>Top Referals</div>

                   
                  <div className={styles.referalgrid}>
                  <div className={styles.referalcontent}>
                   <div className={styles.referalcontent1}> 
                        <img src={profile} alt='profileimage'></img>
                      
                        <div className={styles.referalname}>Suraj Khandwal</div>
                        <div className={styles.referalstate}>Jaipur, Rajsthan</div>
                        
                        </div>

                      <div className={styles.referalcontent2}>
                      <div className={styles.referalsubcon}>
                            <img src={referal}></img>
                            <div className={styles.referalinteger}>300</div>
                            <div className={styles.referalsubcontext}>Referals</div>
                        </div>
                        <div className={styles.referalsubcon}>
                            <img src={trophy1}></img>
                            <div className={styles.referalinteger}>300</div>
                            <div className={styles.referalsubcontext}>Rewards</div>
                        </div>
                      </div>
                   </div>


                   <div className={styles.referalcontent}>
                   <div className={styles.referalcontent1}> 
                        <img src={profile} alt='profileimage'></img>
                      
                        <div className={styles.referalname}>Suraj Khandwal</div>
                        <div className={styles.referalstate}>Jaipur, Rajsthan</div>
                        
                        </div>

                      <div className={styles.referalcontent2}>
                      <div className={styles.referalsubcon}>
                            <img src={referal}></img>
                            <div className={styles.referalinteger}>300</div>
                            <div className={styles.referalsubcontext}>Referals</div>
                        </div>
                        <div className={styles.referalsubcon}>
                            <img src={trophy1}></img>
                            <div className={styles.referalinteger}>300</div>
                            <div className={styles.referalsubcontext}>Rewards</div>
                        </div>
                      </div>
                   </div>



                   <div className={styles.referalcontent}>
                   <div className={styles.referalcontent1}> 
                        <img src={profile} alt='profileimage'></img>
                      
                        <div className={styles.referalname}>Suraj Khandwal</div>
                        <div className={styles.referalstate}>Jaipur, Rajsthan</div>
                        
                        </div>

                        <div className={styles.referalcontent2}>
                      <div className={styles.referalsubcon}>
                            <img src={referal}></img>
                            <div className={styles.referalinteger}>300</div>
                            <div className={styles.referalsubcontext}>Referals</div>
                        </div>
                        <div className={styles.referalsubcon}>
                            <img src={trophy1}></img>
                            <div className={styles.referalinteger}>300</div>
                            <div className={styles.referalsubcontext}>Rewards</div>
                        </div>
                      </div>
                   </div>


                   <div className={styles.referalcontent}>
                   <div className={styles.referalcontent1}> 
                        <img src={profile} alt='profileimage'></img>
                      
                        <div className={styles.referalname}>Suraj Khandwal</div>
                        <div className={styles.referalstate}>Jaipur, Rajsthan</div>
                        
                        </div>

                        <div className={styles.referalcontent2}>
                      <div className={styles.referalsubcon}>
                            <img src={referal}></img>
                            <div className={styles.referalinteger}>300</div>
                            <div className={styles.referalsubcontext}>Referals</div>
                        </div>
                        <div className={styles.referalsubcon}>
                            <img src={trophy1}></img>
                            <div className={styles.referalinteger}>300</div>
                            <div className={styles.referalsubcontext}>Rewards</div>
                        </div>
                      </div>
                   </div>
                  </div>
                   
            </div>
        </div>
    </div>
{/* 
    /figma 1 */}

<div className={styles1.parent}>
    <div className={styles1.heading}>Top 10 Campus Ambassador Performers</div>
    <div className={styles1.subheadingcont}>
    <div className={styles1.subheading}>

        <button className={selectedOption === 'monthly' ? styles1.active : ''} onClick={() => toggleSelection('monthly')}><div>Monthly</div></button>
        <button className={ selectedOption === 'Quarterly' ? styles1.active : ''} onClick={() => toggleSelection('Quarterly')}><div>Quarterly</div></button>

    </div>
    </div>



       {data.map((val,key)=>{
        return <>
        
    <div className={styles1.parent2}>
    <div className={styles1.parentcont}>
        <div className={styles1.firstdiv}>
           <div className={styles1.mainlogodiv}> 
            <img className={styles1.crownimg} src={ key+1=== 1 ? logo :logo2}></img>
            <div>{key+1}</div>
            </div>
            <div className={styles1.firstsubdiv}>
                <img src={val.profileimg}></img>
                <div>
                    <div className={styles1.firstdivtext}>{val.Name}</div>
                    <div className={styles1.firstdivtext2}>{val.Address}</div>
                </div>
            </div>
        </div>

        <div className={styles1.seconddivparent}>
        <div className={styles1.seconddiv}>
         <div className={styles1.seconddivtext}>Achievement</div>
         <div className={styles1.seconddivimg}>
            <img src={badge}></img>
         </div>
         <div className={styles1.seconddivimg}>
            <img src={linkdn}></img>
         </div>
         <div className={styles1.seconddivimg}>
            <img src={paytm}></img>
         </div>
         <div className={styles1.seconddivspeakerimg}>
            <img src={speaker}></img>
         </div>
        </div>
        </div>

        <div className={styles1.thirddiv}>
        <div className={styles1.seconddivspeakerimg}>
            <img src={trophy}></img>
         </div>
         <div>
            <div className={styles1.thirddivtext}>{'₹'+val.points}</div>
            <div className={styles1.thirddivtext1}>Rewards</div>
         </div>
        </div>
    </div>
    </div>

        </>
       })}
    


   

    </div>
   </div>
    </>
  )
}

export default Figma2