import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/profile_pic.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/textAdventure.png';
import pic5 from '../assets/images/dashboard.png';
import pic6 from '../assets/images/Excel.png';
import pic7 from '../assets/images/split_screen.jpg';
import desales from '../assets/images/Desales_logo.png';
import resume from '../assets/images/Resume Daniel-Saviet 3-30-2022 Revised.pdf';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major" id = 'objective'>Objective</h2>
            <p>
              I am a recent graduate of DeSales University looking to expand my horizons into the field of 
              software development.
              I am adding new experiences, languages, and tools to my skill set every day.
              I am looking for a position to challenge my current level of knowledge,
              and help me to grow as a developer while helping projects to flourish with fresh 
              perspective, and a willingness to ask the tough questions.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={desales} alt="" />
          </a>
          <div className="content">
            <h2 className="major" id = 'education'>Education and Honors</h2>
            <p>
              &emsp;I attended DeSales University from 2018 to 2022 graduating with a Bachelor's of Science in Computer Science.
              While attending, I earned the DeSales Presidential Merit Scholarship and the DeSales Dean's Scholarship.
              I took part in the Computer Science Club and participated in events hosted by the organization.
              <br></br> <br></br>
              &emsp;Prior to that, I have had the pleasure of serving 
              my community over the better part of the last Decade as a Boy Scout.
              In July of 2018, I was awarded the highest rank of Eagle Scout for demonstrating leadership, character, and
              a strong devotion to my community. 
            </p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major" id='experience'>Experience</h2>
            <p>
              I began my career at the age of eleven working at a cub scout summer camp. Over the course of seven years
              I grew into a leadership position there as a Lifeguard Supervisor. From there I moved on to be a Lifeguard 
              elsewhere as well as a cashier building a strong customer service background. 
              <br></br><br></br>
              I was then given the oppurtunity to intern as a Database Management Specialist at Dan Schantz
              Farms and Greenhouses where I was able to take part in a company-wide effort to implement systems,
              technologies, and policies for the use of an inventory database at the farm. Over the course of a year, 
              our team worked tirelessly to complete our plans, and I am proud to say that we accomplished our goals
              for tracking the receiving, use, and shipping of inventory through the database.
              <br></br><br></br>
              For more details, view my resume below.
            </p>
            <a href={resume} target="_blank" rel="noreferrer" className='special'>View Resume</a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major" id= 'projects'>Projects</h2>
          <p>
            Here is an overview of a few projects I have taken part in as a student at DeSales University,
            as a programming hobbyist, and as a Database Management Specialist.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">text_Adventure, a simple text-based adventure game that started it all</h3>
              <p>
                This was the first project I ever completed. It was created in 2016 while I was still in 
                high school.
                It is the project that started me down the path of computer science.

                It represents where I started, and how far I have come.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Tableau Training and Data Science Experience</h3>
              <p>
                At DeSales I had the oppurtunity to take a graduate level AI and Data Science course.
                In the class I was able to engage with popular software Tableau. In my final project, I
                Analyzed worldwide economic data, and contemplated the relationship between national debt and
                inflation.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Custom Database Queries in SQL with Excel BI</h3>
              <p>
                The information supplied by the queries displayed in these
                 Excel files were indispensible in the efforts
                of my team to monitor, improve, and remediate the inventory as we implemented
                database policies and systems. 
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">BetterBudget, a mobile app for responsible spenders</h3>
              <p>
                This is an app that I developed from the ground up as my capstone project, and the 
                crowning achievement of my education at DeSales University. It allows users to
                enter transactions into their budgets and get visualizations and advice about their 
                budgeting habits.
              </p>
            </article>
          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
