import React from 'react'
import './About.scss'
import login from '../../assets/login.png'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about-page">
      <section className="projects">
        <h1> Efficient Payroll and management system</h1>
        <div className="paragraph">
          <p>This project represents a sophisticated solution engineered to streamline workforce management for businesses.Built using  cutting-edge technologies such as <span>React js</span>for frontend,<span>Express js</span> for backend and<span> Microsoft SQL</span> for database management . </p>
          <p>
            This system offers a comprerhensive suite of features tailored to meet the complex needs of modern organizations</p>
        </div>
        <div className="demo">
          <Link to='#'>view demo</Link>
        </div>
        <Link to='https://github.com/SIMONKAMAU21/payroll_management_client.git'>git hub repository</Link>
        <div className="project-img">
          <img src={login} alt="nopic" srcset="" />
        </div>
        <div className="btn">
        <Link to="">see more</Link>
        </div>
      </section>

      <section className="projects">
        <h1> Hiphonic Social Media platform</h1>
        <div className="paragraph">
          <p>This project represents a sophisticated solution engineered to streamline workforce management for businesses.Built using  cutting-edge technologies such as <span>React js</span>for frontend,<span>Express js</span> for backend and<span> Microsoft SQL</span> for database management . </p>
          <p>
            This system offers a comprerhensive suite of features tailored to meet the complex needs of modern organizations</p>
        </div>
        <div className="demo">
          <Link to='#'>view demo</Link>
        </div>
        <Link to='https://github.com/SIMONKAMAU21/payroll_management_client.git'>git hub repository</Link>
        <div className="project-img">
          <img src={login} alt="nopic" srcset="" />
        </div>
        <div className="btn">
        <Link to="/">see more</Link>
        </div>
      </section>

      <div className="footer">
        <p>&copy @2024 simon kamau</p>
      </div>
    </div>
  )
}

export default About