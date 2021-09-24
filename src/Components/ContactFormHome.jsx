import React from 'react';
import emailjs from 'emailjs-com';

function ContactFormHome(props) {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_zu8jrxd', e.target, 'user_3uzs2LZ7Yn2W0thmASr19')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    return (
        <form action="" onSubmit={sendEmail}>
            <div class="formWord">
                <input class="input100" type="text" name="name" required placeholder="Full Name" />
                <br />
                <input class="input100" type="tel" name="phone" required placeholder="Phone Number"/>
                <br />
                <input class="input100" type="text" name="email" required placeholder="Email"/>
                <br />
            </div>
            <div class="formWord">
                <textarea name="message" required placeholder="Message"></textarea>
                <br />
                <button type="submit">SUBMIT</button>
            </div>
      </form>
    )
}

export default ContactFormHome;
