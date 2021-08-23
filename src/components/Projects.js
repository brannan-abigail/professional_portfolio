import React from "react";

export default function Projects() {
  return (
    <div className = "component"> 
      <h2> Projects </h2>

      <p> In addition to my work experience, I've had the opportunity to do some great projects that demonstrate my 
          abilities. These are primarily in various courses, as I focused heavily on my coursework or my work in my 
          college career, depending on the season.
      </p>
      
      <p>
        <strong> Applied Cryptography Project </strong> Applied Cryptography Course (May 2021)
        <li> Investigated the state of privacy of Bitcoin through passive network analysis on address usage utilizing 
            Python and Pandas. 
        </li>
      </p>

      <p>
          <strong> Readr </strong> Accessible Computing Course (May 2021)
          <li> Designed and created a Python script to read text in the physical world aloud for vision-impaired 
              people. 
          </li>
      </p>

      <p>
          <strong> Professional Aggie Industrial Distribution (PAID) Alumni Tracker </strong> Software Engineering Course 
          (December 2020)
          <li> Assisted the PAID student organization manage their alumni relationship through the creation of a
              web app using Ruby on Rails, Capybara and Cucumber.  Helped the team work in an agile manner as SCRUM master.</li>
      </p>

      <p>
          <strong> MarkIt </strong> Programming Studio Course
          (April 2020)
          <li> Explored web development by creating a single-page web app to track stocks on the stock market using a 
              Python Flask backend calling external API’s and a Vue.js frontend connected through REST endpoints. 
          </li>
          <li> Created an effective and enjoyable team experience as project manager.</li>
      </p>
      
      <p>
          <strong> Holodeck </strong> Texas A&M Innovation Corps Site Program
          (July 2017 - August 2017)
          <li> Performed customer validation with 36 customer interviews, and developed and presented a possible business model for 
              a Virtual Reality app for contractors to better visualize the construction site.
          </li> 
      </p>
    </div>
  );
}