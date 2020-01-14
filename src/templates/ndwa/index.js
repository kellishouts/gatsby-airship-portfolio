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
            <h1 className="white-text h1-product">NDWA Membership Onboarding</h1>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Project Overview</h3>
              <p>In December 2019, I was asked to improve the user onboarding flow for the National Domestic Workers Alliance membership website. For this project, the team had already done some initial user testing and had determined the key pain points experienced by members. It would be important for the new website to:
              </p>
              <ol>
                <li><b>Prioritize Mobile Devices</b>. Most of the organization's targeted audience use a mobile phone as their primary device.</li>
                <li><b>Deprioritize Email for Sign In</b>. Most of their members do not check their email.</li>
                <li><b>Utilize Automated Text Messaging</b>. The most effective communication with members has proven to be via text messages.</li>
              </ol>

            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Membership Signup Flow</h3>
              <p>With these priorities in mind, I audited the sign up process on both mobile and desktop web browsers. The audit revealed a lengthy 13-step web signup process that included 3 separate emails.</p>

              <div className="image-box image-box-large">
                <a href="https://kelli.airshipcms.io/assets/images/NDWACurrentFlow.png" target="_blank"><img className="large-image" src="https://kelli.airshipcms.io/assets/images/NDWACurrentFlow.png" alt="Old Member Sign-in Steps" /></a>
                <p className="caption">Old Member Sign-in</p>
              </div>

              <p>I then mapped out a proposed user flow that would reduce the number of sign-in steps down to 4 web pages, a single email, and a text message user authorization trigger.</p>

              <div className="image-box image-box-large">
                <a href="https://kelli.airshipcms.io/assets/images/NDWANewFlow.png" target="_blank"><img className="large-image" src="https://kelli.airshipcms.io/assets/images/NDWANewFlow.png" alt="Proposed Member Sign-in Steps" /></a>
                <p className="caption">Proposed Member Sign-in </p>
              </div>

              <p>In addition to providing a text-message alternative for sign in, the proposed &ldquo;password-less&rdquo; authentication flow would allow users to access their account without having to remember any login credentials beyond their own email or phone number, when they return to the website in the future.</p>

              <div className="image-box image-box-large">
                <a href="https://kelli.airshipcms.io/assets/images/NDWASignInFlow.png" target="_blank"><img className="large-image" src="https://kelli.airshipcms.io/assets/images/NDWASignInFlow.png" alt="Old Member Sign-in Steps" /></a>
                <p className="caption">Proposed Return-User Sign-in </p>
              </div>

              <p>View the initial click-through of the initial website audit and the initial draft of the proposed flow <a href="https://invis.io/BAVIFLJWPK9#/400322978_User_Registration_Flows_" target="_blank">here</a>.</p>

              <p>My next steps are to complete the wireframes for the rest of account management and secondary content pages. By January 20, 2020, the complete membership flow will be finalized.</p>
            </div>
          </div>
        </div>

      </div>
    </Layout >
  )
}