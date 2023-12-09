import React, {useState, useEffect} from "react";

export default function Testimonials(){
    let [testimonial, setTestimonial] = useState ([])

    useEffect(() => {
        fetch('gridData.json')
            .then(response => response.json())
            .then(json => setTestimonial(json.testimonials))
    }, [])

    let rating = testimonial.map(rating => {
        return(
            <div className="rating-wrap" key={rating.name}>
                <img className="client-img" src={`${process.env.PUBLIC_URL}/assets/images/${rating.img}`} alt=""/>

                <p className="client-words">{rating.testimonial}</p>

                <div className="name-position">
                    <p className="client-name">{rating.name}</p>

                    <p className="client-position">{rating.position}</p>
                </div>
                
            </div>
        )
    })

    return(
        <section className="testimonial-wrap">
            <h3>CLIENT TESTIMONIALS</h3>
            <article className="rating">
                {rating}
            </article>
        </section>
    )
}