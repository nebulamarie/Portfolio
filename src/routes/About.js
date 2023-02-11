import React from 'react'
import headshot from '../images/headshot.jpg'
export default function About() {
  return (
    <div className='About'>
      <h2>About</h2>
      <header>Marie Epps</header>
      <body></body>
      <section>
        <nav className='Aboutnav'>
             <img src={headshot}/>
        </nav>
        <article>
          <p>Marie is a professional with an extensive background in Vendor Management and Account Management.</p>
            <p>Her skills include:
              <ul>
                <li>Vendor/"supplier risk assessment</li>
                <li>Issue Resolution</li>
                <li>Benchmarking</li>
                <li>Quality and cost delivery requirements</li>
                <li>KPI's</li>
                <li>Solution focused negotiations</li>
                </ul>
          </p>
        </article>
      </section>

      <footer className='Aboutfooter'>
        <p>Home</p>
      </footer>
    </div>
  );
}
