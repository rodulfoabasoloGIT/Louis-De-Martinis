 import React from 'react'
import Testimonial from '../testimonial'
import Swal from 'sweetalert2'
import 'animate.css'; 




 const TestimonialBlock = (props)=>{

    const modal =() => {
        Swal.fire({
            text: props.hcontent, confirmButtonColor:'#fb731bba',confirmButtonText:'Back',width:1000,background:'#e8ffee', textstyle:'justify',
            
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
        })
    }

     return(
         <>
             <section className="testimonial-block-element">

                <span className="testimonial-num">
                    {props.num}
                </span>

                <h2>{props.title}</h2>
                <span className="testimonial-author">{props.author}</span>

                <p onClick={(modal)}>
                    {props.content}
                </p>
                
             </section>
         </>
     )
 }

 export default TestimonialBlock