import React from 'react'
import Block from  './Testimonials/testimonial-block'
import Slider from "react-slick";
import Swal from 'sweetalert2';


const Testimonial = ()=>{

    
        

    return(
        <>
            <section className="testimonial-section">
                <h1>
                    <span>
                      Reviews and Testimonials
                    </span>
                </h1>
            </section>

            <section className="testimonial-blocks">
               
                   
                    <div className="grid-block-wrapper"> 
                

                
                    
                   
                    <Block 
                        num={`01`}
                        title={` Batya Weinbaum`}
                        author={`Recommended by the US Review`}
                        content={
                            `
                           She hopes that this stunning and moving compilation "will lead to more enjoyment of here, a new conscious awareness of the hereafter, and new understandings about the connections between them" since she believes that those interconnections make life fascinating...(click to see more)

                            
                            `
                        }

                        hcontent ={
                            `
                             "Suddenly, Bedstemor had a job to do. Her time had come. She raised her head and blew short little breaths."

                            Ibsen poignantly relates a series of vignettes of individuals ranging from idealists to dogs confronting life-endings, asking why, and forming new perceptions of experiences in other dimensions as they accept, integrate, and journey off onto various new beginnings.
                            Poetry, psalms, and photographs deepen readers' engagement with the beings whose stories she tells as the narrative unfolds.
                           For example, readers visit ceremonies and receptions in mundane places and fellowship halls. They learn about inheritances, handmade coffins, and belly dancing and hear songs and prayers. They also meet contrasting personalities, such as Methodist ministers, family members, gambling friends, and twelve steppers. And, in keeping with what all must one day face, they witness the inevitable gathering at bedsides and moments of passing.
                            The author's intimate portraits are well done, skillfully conveying the deep feeling and eternal impact of the people about whom she writes. For example, she describes how Charlotte, "like a baby chick, lay patiently in a hand-carved wooden egg about to hatch, about to continue her healing work, newborn, in another place, in another way." The dialogue is incisive and will likely help many who, as a result of being in shock, go through the loss of loved ones in a blur. In this regard, her book can function like a grief self-help group for those without the time or inclination to go.
                            `
                        }
                    /> 

                    <Block 
                        num={`02`}
                        title={`Harold S. Riter`}
                        author={`The Ontonagon Herald`}
                        content={
                            `
                            Does life have a purpose? Are we simply individuals or are we all a part of one great body of humanity and inter-connected? In reading Here and Hereafter one may be led to confront one's own reason for living. This is no ordinary story book, though the accounts of people she has known are engaging and will hold the reader's attention. 


                            This memoir by James Bosley of Silver City is...(click to see more)

                           
                            `
                        }
                        hcontent ={
                            `This memoir by James Bosley of Silver City is an introspective journey of life that she shares with the reader.
                            It is a recollection of those she has known since her childhood to the present day. Through the deaths, which the author refers to as life-endings, of persons she has known, including childhood friends, co-workers, her own parents, friends, and even pets, she brings a new view of the departure of those who have passed. Here and Hereafter not only puts before the reader the situations of various lives, but the conclusions of the earthly existence of those she has known                 
            
          
         The book is structured in such a way that the reader can put it down and resume reading later without losing a story line. It is a book that busy people can read during time stolen from a heavy schedule, or during rare moments of leisure, or one can try to plow through the 250 plus pages in one sitting, however, be warned that the reader will be challenged to stay with the journey to which he/she is being led, without pausing for personal reflection and deep thought. This book brings about one’s own introspection and views of our current existence. Each story-chapter is engrossing and self sufficient enough to set the tone for deeper questions into the meaning of our own lives.
      As James Bosley has progressed through her own life’s experiences, she has put this memoir into four sections, each containing an account of a person or persons in which she has been in contact. The first part is about her early childhood and her recollections of confronting the end of life. The second part is about her search for reasons that people pass on. In the third section she moves to the almost mystical or supernatural occurrences of what many experience after the loss of loved one.  In the last section, the author shares with the reader her more recent life’s experiences, including the loss of a beloved pet, and in a final afterword, the author shares her own conclusions with the reader.

                            `
                        }
                      
                    /> 
                    
                    

                      

                    <Block
                        num={`03`}
                        title={`Carlyle Nelson`}
                        author={`Rapid City SD`}
                        content={
                            `
                            “Just finished reading your book.  Sounds strange but your take on deaths did not demoralize me but somehow energized me.  Thoughts of all the deaths I have encountered were brought to mind, not sadness, but lots of wonderful memories....(click to see more)
                                                     
                            `
                        }
                        hcontent ={
                            `
                            “Just finished reading your book.  Sounds strange but your take on deaths did not demoralize me but somehow energized me.  Thoughts of all the deaths I have encountered were brought to mind, not sadness, but lots of wonderful memories.  I want to commend you for both your book and your tenacity for overcoming much adversity during your lifetime and maintaining a wonderful attitude.”
                            `
                        } 
                        />         
                 </div>

                
            </section> 
        </>
    )
}


export default Testimonial


