import React, { useState } from "react"

import Layout from "../../components/layout"
import LightBox from "../../components/light-box"
// import SEO from "../../components/seo"

export default () => {
  let [lightboxImage, setLightboxImage] = useState()
  const closeLightbox = () => setLightboxImage(null)
  const openLightLightbox = (image) => {
    return () => setLightboxImage(image)
  }

  return (
    <Layout bodyClass='bodyclass-case-study'>
      <LightBox close={closeLightbox} image={lightboxImage} />
      <div>
        <div className="container teal-container product-header-container">
          <div className="block product-header-block">
            <h3>UX Design</h3>
            <h1 className="white-text h1-product">National Domestic Workers Alliance</h1>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Project Overview</h3>
              <p>In December 2019, I was tasked with improving the user onboarding experience for the National Domestic Workers Alliance membership website. This organization provides an outlet for domestic workers and caretakers to seek support from other members, obtain access to health and personal benefits, and become leaders in their community in fighting for policy changes at both a state and national level.</p>
                
              <p>For this project, the team had already done some initial user testing and had identified the key pain points experienced by members. It would be important for the new website to:
              </p>
              <ol>
                <li><b>Improve Member Sign Up</b>. Potential members were not completing the sign up process.</li>
                <li><b>Prioritize Mobile</b>. Members use a mobile phone as their primary internet-connected device.</li>
                <li><b>Deprioritize Email</b>. Most members do not regularly check their email.</li>
                <li><b>Leverage Text Messaging</b>. The most effective communication with members occurs via text messages.</li>
              </ol>

            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Refactored User Flows</h3>
              <p>With these priorities in mind, I audited the sign up process on both mobile and desktop web browsers. The audit revealed a lengthy 9-step web signup process plus 3 different types of automatically generated emails.</p>

              <div className="image-box image-box-large">
                <a href="https://kelli.airshipcms.io/assets/images/NDWACurrentFlow.png" target="_blank"><img className="large-image" src="https://kelli.airshipcms.io/assets/images/NDWACurrentFlow.png" alt="Old Member Sign-in Steps" /></a>
                <p className="caption">Old Member Sign-in</p>
              </div>

              <p>I then mapped out a proposed user flow that could reduce the number of sign-in steps down to 3 web pages, a single email, and a text message user authorization trigger.</p>

              <div className="image-box image-box-large">
                <a href="https://kelli.airshipcms.io/assets/images/NDWANewFlow.png" target="_blank"><img className="large-image" src="https://kelli.airshipcms.io/assets/images/NDWANewFlow.png" alt="Proposed Member Sign-in Steps" /></a>
                <p className="caption">Proposed Member Sign-in </p>
              </div>

              <p>In addition to providing a text-message alternative for sign in, the proposed "password-less" authentication flow would allow users to access their account without having to remember any login credentials beyond their own email or phone number. I especially emphasized the <b>text-message-based authentication flow</b>, since it meant that users would not have to rely on email for sign in.</p>

              <p>PIC - SIGN IN</p>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Mid-Fidelity Wireframes</h3>

              <p>I created mid-fidelity blue-line wireframes to map out the 3-step form flow. I  like to initially work in a blue or grey palette, since it strips away distracting imagery and colors when I am focused on laying out an initial page structure.</p>

              <p>PIC - ALL DESKTOP WIREFRAMES</p>

              <p>Even though this is just a mid-fidelity wireframe, I do my best to write clear and functional verbiage for all areas of the layout that are core to the user's experience. For this project, it was important to write <b>friendly and encouraging intros to every form sections and very clear help text</b>. Previously, users would not complete the form because they were concerned about why certain pieces of personal information were being collected.</p>

              <p>PIC - WIREFRAMES - LANGUAGE CLOSEUP</p>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Payment Processing Verbiage</h3>

              <p>I also examined the language around payment processing. Members could pay a $5 monthly fee through recurring billing, or a $60 upfront single payment. This was an essential option for members who had less stable incomes or did not want to put a credit card on file for an automatic subscription. Previously, it was very unclear how long a subscription would last or how users could extend their membership. In the redesign, I added in <b>clearer verbiage to explain payment terms</b>.</p>

              <p>PIC - PAYMENTS VERBIAGE</p>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Desktop High-Fidelity</h3>

              <p>After iterating over the form flow and working closely with the client to get feedback, it became apparent that the form could benefit from a multi-step flow, which would allow the team to (1) be able to track user sign-up and drop-off with more granular detail, and (2) allow the user to process form fields in smaller, chucks of information.</p>

              <p>Due to extremely tight time constraints, I worked directly with high-fidelity wireframes from this point onward as I designed the multi-step form flow.</p>

              <p>PIC - DESKTOP VISUAL DESIGN</p>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Mobile High-Fidelity</h3>

              <p>I then resized the form screens down to a mobile format. Doing so revealed complexity in the header that did not translate to mobile very well so I spent some time to simplify and clean up the form header.</p>

              <p>PIC - BEFORE/AFTER HEADER FOR MOBILE/DESKTOP</p>

              <p>While working on the mobile layout, it became apparent that there was too much information on the first form page so I pulled the form "intro" to its own page. This ended up giving the sign up flow much more context, even though it added back another step to the process.</p>
              
              <p>The final user flow ended up being 6 steps long. Unlike the website's previous iteration, each step in the newly designed process had a clearly defined function.</p>

              <p>PIC - FINAL FLOW</p>

              <p>PIC - MOBILE VISUAL DESIGN</p>

              <p>I always find it easiest to <b>design for desktop first, then iterate and simplify down to a mobile version</b>. I think it is important to account for every possible element and every possible state of objects on the page, regardless of whether they are visible or not. Designing for desktop first allows me to imagine a page's most complex state, then simplify to what is absolutely necessary.</p>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Visual Design</h3>

              <p>After completing key membership sign up pages, I turned my attention to designing a responsive website homepage and other marketing pages.</p>

              <p>PIC - HOMEPAGE / MOBILE / TABLET / LARGE WITH MARKINGS</p>

              <p>Because the team already had an excellent photography archive, I was able to gather a strong set of high-resolution imagery that could be used for the responsive header graphics. I also put together a new icon library.</p>

              <p>PIC - PHOTOS / COLORS / ICONS</p>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>How did we do?</h3>
              <p>The entire project was completed within a 2-week timeframe. I believe I successfully hit the objectives I set out to achieve, though I won't have measurable results until there is quantifiable increase in membership numbers. I will know in the second quarter of 2020 and will post an update.</p>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>What did I learn?</h3>

              <p>Whenever I work on a website, I usually do everything including project management, requirements gathering, flowcharts and wireframes, visual design and custom graphics, HTML / CSS layouts, and managing developers building the website infrastructure or custom interactions. This was a refreshing project, where I <b>primarily focused on UX</b>, then handed off assets to be implemented by a separate development team. I think this project revealed several key insights for me:</p>
              <ul>
                <li>It doesn't feel like work, when the <b>team is positive</b>, encouraging, and everyone gives candid feedback.</li>
                <li>It feels extremely meaningful to work on a project that has a <b>social impact</b>. If I do my job right, more people will be members of an organization that gives them greater access to basic human needs.</li>
                <li>My strength is in <b>information architecture</b>. When switching between UX and UI for this project, there was a drastic difference in how easy and natural it was to think about structure, and how much more brain power it took to think creatively about aesthetics. I think both skills are important, though it revealed the areas where I can make the greatest impact.</li>
              </ul>
            </div>
          </div>
        </div>
        

      </div>
    </Layout >
  )
}