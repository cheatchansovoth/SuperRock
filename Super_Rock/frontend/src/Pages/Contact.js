import react from 'react';

import './Contact.css';

const Contact=()=>
{

    return (
        <div>
            <h1>Contact</h1>
            <p>Super Rock Resrutrant</p>
            <p>We offer a wide range of food options for our customers. We will make that our serive satisfy your needs. Please contact us with any queries</p>
            <p>Address: 890 John Road</p>
            <p>Phone: 90181489104</p>
            <p>Email: super_rock@aut.com</p>

            <div class="border">
                <form>
                    <label for="fname">Full Name</label>
                    <input type="text" id="name" name="fullname" placeholder="Your full name.."/>

                    <label for="email">Email</label>
                    <input type="text" id="email" name="firstname" placeholder="Enter Email Address.."/>
                    
                    <label for="subject">Message</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit"/>
                
                 </form>
            </div>



        </div>
    );
}
export default Contact;