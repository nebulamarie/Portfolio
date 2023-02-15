import { Link } from "react-router-dom";
export default function Contact(){
    return (
        <div className="contact">
            <h2>Let's Connect</h2>
            <p>If you have any questions feel free to drop me a line</p>
            <body></body>

            <p>My socials:
              <ul>
                <li>LinkedIn: <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'>LinkedIn</a>
                </li>
                <li>Github: <a href="https://github.com/nebulamarie/CalculatorProject">Github</a></li>
                <li>Email: <a href="mailto:mepps@gmail.com">Email</a> </li>
                </ul>
            </p>    

      <footer className='Contactfooter'>
        <p><Link to={'/home'}>Home</Link></p>
      </footer>
    </div>
  );
}

    