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
                <li><b>Prioritize Mobile</b>. Most members used a phone as their primary internet-connected device.</li>
                <li><b>Deprioritize Email</b>. Most members did not regularly check their email.</li>
                <li><b>Leverage Text Messaging</b>. Members responded best to announcements via text messages.</li>
              </ol>

            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Refactored User Flows</h3>
              <p>With these priorities in mind, I audited the sign up process on both mobile and desktop web browsers. The audit revealed a lengthy 9-step signup process plus 3 automatically generated emails.</p>

              <div className="image-box image-box-large">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-user-flow-sign-up-current.png" alt="Previous Member Sign-in User Flow" />
                <p className="caption">Previous Member Sign-in User Flow</p>
              </div>

              <p>I then mapped out a proposed user flow that could reduce the number of sign-in steps down to 3 web pages, a single email, and a text message user authorization trigger.</p>

              <div className="image-box image-box-large">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-user-flow-sign-up-3step.png" alt="Simplified Member Sign-in User Flow" />
                <p className="caption">3-Step Member Sign-in User Flow</p>
              </div>

              <p>In addition to providing a text-message alternative for sign in, the proposed "password-less" authentication flow would allow users to access their account without having to remember any login credentials beyond their own email or phone number. I especially emphasized the <b>text-message-based authentication flow</b>, since it meant that users would not have to rely on email for sign in.</p>

              <div className="image-box image-box-large">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-user-flow-login.png" alt="Login User Flow" />
                <p className="caption">Login User Flow</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Mid-Fidelity Wireframes</h3>

              <p>I created mid-fidelity wireframes to map out the 3-step form flow. I  like to initially work in a blue or grey palette, since it strips away distracting imagery and colors when I am focused on laying out an initial page structure.</p>

              <div className="image-box image-box-large">
                <a href="https://kelli.airshipcms.io/assets/images/ndwa-mid-fidelity-wireframes.png" target="_blank">
                  <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-mid-fidelity-wireframes.png" alt="Mid-fidelity wireframes for the new sign up user flow." />
                </a>
                <p className="caption">Mid-fidelity wireframes for the new sign up user flow.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>UX Writing</h3>

              <p>Even though this is just a mid-fidelity wireframe, I do my best to write clear and functional verbiage for all areas of the layout that are core to the user's experience. For this project, it was important to write <b>friendly and encouraging intros</b> for all form sections. Previously, users would not complete the form because they were concerned about why certain pieces of personal information were being collected.</p>

              <div className="image-box image-box-medium">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-ux-writing-intros.png" alt="Section intros for the sign up form." />
                <p className="caption">Section intros for the sign up form.</p>
              </div>

              <p>I also examined the language around payment processing. Members could pay a $5 monthly fee through recurring billing, or a $60 upfront single payment. This was an essential option for members who had less stable incomes or did not want to put a credit card on file for an automatic subscription. Previously, it was very unclear how long a subscription would last or how users could extend their membership. In the redesign, I added <b>clearer verbiage to explain payment terms</b>.</p>

              <div className="image-box image-box-medium">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-ux-writing-payment.png" alt="Verbiage with specific details about payment." />
                <p className="caption">Verbiage with specific details about payment.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Mobile-Friendly Components</h3>

              <p>A seamless mobile experience was absolutely key for this user experience. Due to the development time constraints, I recommended using unstyled form elements for the sign up flow to guarantee native compatibility with mobile devices.</p>

              <p>I also recommended that options should be listed vertically, dates should be dropdowns (not a date picker), and long blocks of text should be textareas.</p>

              <div className="image-box image-box-medium">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-ux-writing-accessibility.png" alt="Recommended changes to components for optimal mobile compatibility." />
                <p className="caption">Recommended changes to components for optimal mobile compatibility.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Desktop High-Fidelity</h3>

              <p>Working closely with the client, it became apparent that the form could benefit from a multi-step flow which would allow the team to be able to <b>track visitor drop-off</b>, and <b>allow the user to process the form in smaller bits of information</b>. This added steps to the sign up flow, though the intention was to give the user more reassurance during the sign up process. I didn't have a chance to this flow, though this is something I would want to test if we had more time.</p>

              <div className="image-box image-box-large">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-user-flow-sign-up-simplified.png" alt="New multi-step member sign up flow." />
                <p className="caption">Multi-step member sign up flow.</p>
              </div>

              <p>Due to extremely tight time constraints, I worked directly with high-fidelity wireframes from this point onward as I designed the multi-step form flow.</p>

              <div className="image-box image-box-large">
                <a href="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-desktop.png" target="_blank">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-desktop.png" alt="High-fidelity mockups for the desktop sign up user flow." />
                </a>
                <p className="caption">High-fidelity mockups for the desktop sign up user flow.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Mobile High-Fidelity</h3>

              <p>While scaling the desktop content to mobile dimensions, I realized that the intro (which in a previous iteration was combined with "Step 1") did not scale down to a mobile format very well. I spent some time simplifying the intro text and layout.</p>

              <div className="image-box image-box-medium">
                <a href="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-mobile.png" target="_blank">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-mobile.png" alt="High-fidelity mockups for the mobile sign up user flow." />
                </a>
                <p className="caption">High-fidelity mockups for the mobile sign up user flow.</p>
              </div>

              <p>I always find it easiest to work this way—<b>design for desktop first, then iterate and simplify down to mobile</b>. I think it is important to account for every possible element and every possible state of objects on the page, regardless of whether they are visible or not. Designing for desktop first allows me to imagine a page's most complex state, then simplify to what is absolutely necessary.</p>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Membership Settings &amp; Login</h3>

              <p>Besides the user sign up flow, I also simplified the interactions for text-message-based user login, the membership dashboard, and settings.</p>

              <div className="image-box image-box-large">
                <a href="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-membership.png" target="_blank">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-membership.png" alt="Membership settings and login flow." />
                </a>
                <p className="caption">User login, the membership dashboard, and settings.</p>
              </div>

              <p>I especially wanted to ensure that it was easy for members to update and configure their basic membership information. In the previous website, settings were scattered in various interfaces and grouped in unusal patterns due to system constraints. With the redesign, I checked with the developer first to be sure that the design patterns I was establishing were possible to implement. Many of the notes in this section are primarily questions and considerations for the developer.</p>

              <p>I also believe it is important to allow people to easily <b>opt out of automatic recurring memberships</b>. I wanted to account for specific state changes to be sure that users had a seamless experience:</p>
              <ul>
                <li>Canceling a monthly membership</li>
                <li>Restoring a membership that was canceled</li>
                <li>Canceling an annual membership</li>
                <li>Renewing an annual membership</li>
              </ul>

              <div className="image-box image-box-large">
                <a href="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-membership-type.png" target="_blank">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-membership-type.png" alt="User flows for canceling and renewing memberships." />
                </a>
                <p className="caption">User flows for canceling and renewing memberships.</p>
              </div>

              <p>During this process, I also mocked up iterations showing:</p>
              <ul>
                <li>Switching from a monthly membership to an annual membership</li>
                <li>Switching from an annual membership to a monthly membership</li>
              </ul>
              <p>As I worked on these state changes, the user interactions became confusing and complex. They also represented edge-case scenarios that were unlikely to occur, so it didn't seem worth the time and effort to implement them. <b>Sometimes, things can be implemented with a non-technical fix</b>. In this case, if anyone wanted to switch their subscription type, they could cancel their existing membership then restore it (as a workaround).</p>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Visual Design</h3>

              <p>I was fortunate that the organization had a large archive of high-quality member photography. Using photos as key imagery, I created a vibrant color palette and utilized clean, bold imagery to highlight members in action.</p>

              <div className="image-box image-box-medium">
                <a href="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-marketing.png" target="_blank">
                <img className="" src="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-marketing.png" alt="Homepage and several key marketing pages." />
                </a>
                <p className="caption">Homepage and several key marketing pages.</p>
              </div>

              <p>I also gathered a set of icons and rendered them to have a consistent color palette and stylistic treatment.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/ndwa-icons.png" alt="Icon Library for NDWA Membership." />
                <p className="caption">Icon Library for NDWA Membership.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Accessibility</h3>
              <p>I haven't paid as much attention to accessibility in the past, though now that my interests have shifted to UX, I want to get better at designing accessible experiences. For this site, I checked the contrast of elements and made all the blues and oranges slightly darker so that I could ensure at least a AA accessibility rating for all functional elements and text. Wherever possible, I also made body text a pixel or two larger.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/ndwa-accessibility.png" alt="Increased the color contrast for WCAG 1.2 AA Accessibility." />
                <p className="caption">Increased the color contrast for WCAG 1.2 AA Accessibility.</p>
              </div>

              <p>If I was coding the pages myself, I would ensure that there was tabbed navigation, proper semantic stucture, and labeling. Since my scope of work ended with visual design, implementing all other accessibility measures relied entirely on the web development team.</p>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Asset Handoff</h3>
              <p>Usually, I'm the person implementing the markup and styles for a project, so I don't need to spend time creating scaled versions of layouts. For this project, I wanted to be sure I handed off a good set of instructions to the developer, so I added markup to indicate the intended sizing and spacing at various screen sizes. Note that the image used in the header was just a roughly cut placeholder and the intent was to show how elements shrink, expand and flow when transitioning from mobile to larger screen sizes.</p>
              {/* <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-markup-closeup.png" alt="Margins and padding marked for the developer." />
                <p className="caption">A closeup of the markup.</p>
              </div> */}
              <div className="image-box image-box-medium">
                <a href="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-markup.png" target="_blank">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/ndwa-high-fidelity-markup.png" alt="Margins and padding marked for the developer." />
                <p className="caption">Margins and padding marked for the developer.</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>How did we do?</h3>
              <p>The entire project was completed within a 2-week timeframe. I believe I successfully met the key objectives to <b>improve member sign up</b>, <b>prioritize mobile</b>, <b>deprioritize email</b>, and <b>leverage text messaging</b>. Unfortunately, I won't have measurable results until there is a quantifiable increase in membership numbers. Later this year, I will be able to report the results of the redesign.</p>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>What did I learn?</h3>

              <p>Whenever I work on a website, I usually do everything including project management, requirements gathering, flowcharts, wireframes, visual design, custom graphics, HTML / CSS layouts, and developer management. This was a refreshing project, where I <b>primarily focused on UX</b>, then handed off assets to be implemented by the development team. I think this project revealed several key insights for me:</p>
              <ul>
                <li>It felt extremely meaningful to work on a project that had a <b>social impact</b>. If the redesign is sucessful, more people will be able to join an organization that fights for greater access to basic human rights.</li>
                <li>The project doesn't feel at all like work since the <b>team was supportive</b> and everyone shared candid feedback.</li>
                <li>I love <b>information architecture</b>. When switching between UX and UI for this project, there was a drastic difference in how natural it was for me to think about data structure, verus how much more effort it took to think about visual design. I love aesthetics, and I think both skills are important, though this project certainly revealed that when I am challenged to solve a technical design problem, I can make a greater  impact on an organization.</li>
              </ul>
            </div>
          </div>
        </div>
        

      </div>
    </Layout >
  )
}