import React from 'react'

import Slider from "react-slick";

import Pic1 from '../../static/img/1.jpg';
import Pic2 from '../../static/img/2.jpg';
import Pic3 from '../../static/img/3.jpg';
import Pic4 from '../../static/img/4.jpg';
import Pic5 from '../../static/img/5.jpg';
import Pic6 from '../../static/img/6.jpg';
import Pic7 from '../../static/img/7.jpg';
import Pic8 from '../../static/img/8.jpg';
import Pic9 from '../../static/img/9.jpg';
import Pic10 from '../../static/img/10.jpg';
import Pic11 from '../../static/img/11.jpg';
import Pic12 from '../../static/img/12.jpg';
import Pic13 from '../../static/img/13.jpg';
import Pic14 from '../../static/img/14.jpg';
import Pic15 from '../../static/img/15.jpg';

import Pic16 from '../../static/img/161.jpg';
import Pic17 from '../../static/img/171.jpg';
import Pic18 from '../../static/img/181.jpg';
import Pic19 from '../../static/img/191.jpg';
import Pic20 from '../../static/img/201.jpg';
import Pic21 from '../../static/img/211.jpg';
import Pic22 from '../../static/img/221.jpg';
import Pic23 from '../../static/img/231.jpg';
import Pic24 from '../../static/img/241.jpg';
import Pic25 from '../../static/img/251.jpg';
import Pic26 from '../../static/img/261.jpg';
import Pic27 from '../../static/img/271.jpg';
import Pic28 from '../../static/img/281.jpg';
import Pic29 from '../../static/img/282.jpg';


const MidMain = ()=>{
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
          
        };
    return(
        <>
            <section className="mid-main">
                <div className="container-gt separator-line">
                    <h1>Events</h1>
                    <p className="middle-params" id = "events">
                    September 14 @ Blue Skies Flight School in Guthrie, Ok
                    </p>

                    <div className="gallery">
                    <Slider {...settings}>

              <div>
                <img src={Pic1} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic2} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic3} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic4} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic5} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic6} alt='pic2' id="pic2"/>
                </div>
                        
                <div>
                <img src={Pic7} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic8} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic9} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic10} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic11} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic12} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic13} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic14} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic15} alt='pic2' id="pic2"/>
                </div> 
              </Slider>
              </div>                  
              <p className="middle-params" id = "events2">
                    Second book Signing Event held at Hilton Inn, Warner Center, Woodland Hills, CA.
                    </p>

                    <div className="gallery">
                    <Slider {...settings}>

              <div>
                <img src={Pic16} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic17} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic18} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic19} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic20} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic21} alt='pic2' id="pic2"/>
                </div>
                        
                <div>
                <img src={Pic22} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic23} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic24} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic25} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic26} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic27} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic28} alt='pic2' id="pic2"/>
                </div>
                <div>
                <img src={Pic29} alt='pic2' id="pic2"/>
                </div>
            
              </Slider>

              <Slider {...settings}>

                            <div> 
                     “What a fabulous book, so poetically written!!  Once I started I had a hard time putting it down!!! I want 4 copies!”
                        <span className="italic-tag span-verse">
                        Dr. Ann Becker, Marquette, MI
                        </span> </div>
                        <div>                        
                       “Your book arrived today and what a beauty!  Your writing has all encompassing truth in it that only you could have brought to us.  I am so grateful that you are sharing it with us.  That takes courage and then a lot of ability.  You’ve got both.“
                        <span className="italic-tag span-verse">
                            GJoyce Behrens, Galesburg, II.
                        </span>

                        </div>


                        <div>
                        “Just finished reading your book.  Sounds strange but your take on deaths did not demoralize me but somehow energized me.  Thoughts of all the deaths I have encountered were brought to mind, not sadness, but lots of wonderful memories.   I want to commend you for both your book and your tenacity for overcoming much adversity during your lifetime and maintaining a wonderful attitude.”   
                        <span className="italic-tag span-verse">
                        Carlyle Nelson,  Rapid City SD

                        </span></div>
                        
                        <div>
                        “The author guides you through a collection of thoughtful and insightful stories with such imagery that I forgot I was reading.  It felt as though I was there as a witness.  Each story is an intimate sharing of an individual and varied experiences of living and dying.  While this may seem a dark topic, the author guided me through the stories with such grace and ease that I actually felt privileged to be a witness in such intimate moments.  It is refreshing that the author simply presents what is/was, without editorial or evangelizing a particular viewpoint.  That allowed me to explore all of the depths of my own ideas about what happened, and philosophies about what’s next.  I highly recommend this book.’’
                        <span className="italic-tag span-verse">
                        Ginny Joyce, Bonita Springs, FL
                        </span></div>
                        
                        </Slider>
                        
              </div>   

            </div>
            </section>
        </>
    )
     
      


}

export default MidMain;



