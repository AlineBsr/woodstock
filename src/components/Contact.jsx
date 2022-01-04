import React from 'react';

const Contact = () => {
    return(
        <article className="contact">
            <h1>Contact us</h1>
            <form>
                <input className="form-control" name="firstname" type="text" placeholder="first name" required />
                <input className="form-control" name="firstname" type="text" placeholder="last name" required /><br/>
                <input className="form-control" name="email" type="email" placeholder="mail adress" required /><br/>
                <textarea className="form-control" name="message" type="text" placeholder="message" rows={4} maxLength={500} required /><br/>
                <input type="submit" />
            </form>
        </article>
    )
}

export default Contact;