import React from 'react'
import styles1 from '../Styles/Figma1.module.css'
import { useState } from 'react';
import logo from '../images/maincrown.svg'
import profile from '../images/profile1.svg'
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
 const Figma1 = () => {
    const [selectedOption, setSelectedOption] = useState('monthly');
    const toggleSelection = (option) => {
        setSelectedOption(option);
      };
     console.log(selectedOption);
  return (
    <>
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
    </>
  )
}

export default Figma1