import React from 'react';
import emailjs from 'emailjs-com';

function ContactFormHome(props) {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <form action="" onSubmit={sendEmail}>
            <div class="formWord">
                <input class="input100" type="text" name="fullName" required placeholder="Full Name" />
                <br />
                <input class="input100" type="text" name="phone" required placeholder="Phone Number"/>
                <br />
                <input class="input100" type="text" name="email" required placeholder="Email"/>
                <br />
            </div>
            <div class="formWord">
                <textarea name="message" required placeholder="Message"></textarea>
                <br />
                <button>SUBMIT</button>
            </div>
      </form>
    )
}

export default ContactFormHome;
