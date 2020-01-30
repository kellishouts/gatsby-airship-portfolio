import React from "react"

import Layout from "../../components/layout"
// import SEO from "../../components/seo"

export default () => {

  return (
    <Layout bodyClass='bodyclass-case-study'>
      <div>
        <div className="container teal-container product-header-container">
          <div className="block product-header-block">
            <h3>UX / UI</h3>
            <h1 className="white-text h1-product">Unicorny Gmail</h1>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Background</h3>
              <p>In March 2019, Google decided to kill Inbox, its alternate UI product for browsing email. I'm a huge fan of Inbox, and was devastated to think that I would have to fall back to Gmail. Additionally, I didn't really want the heavy experience of desktop email clients like Mac Mail or Outlook.</p>
              <p>So I decided to hack my own browser to improve the UI of Gmail, and wrote about my process in a blog post, which you can read <a href="https://medium.com/@airshipcms/gmail-ux-sucks-so-i-fixed-it-for-my-own-sanity-b6f33898ebe3" target="_blank">here</a>.</p>
              
              <div className="image-box image-box-large">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/unicorny-gmail.gif" alt="Unicorny Gmail" />
                <p className="caption">Before and after UI Hacks</p>
              </div>

              <p>The blog post was featured on Medium's front page and received about 1.5k "claps" in March 2019 when it was initially published. Somehow, natural traffic caused a second spike on January 5, 2020, and at the end of January 2020, the post was up to 3.9k total "claps." Additionally, the Design Editor of Medium.com's Design Blog, <em>Modus</em> reached out to me to ask if they could publish the article in their permanent featured collection. To date, it has received over 80k views!</p>

              <p>I also took this project a step further, and figured out how to wrap my CSS code to be an actual Chrome Browser extension, which I published <a href="https://chrome.google.com/webstore/detail/unicorny-gmail/pmffbbfjmlgobdognnccbkieanlkkjjk?authuser=2" target="_blank">here</a> so you can download and install it into Chrome (if you use Gmail).</p>
            </div>
          </div>
        </div>

      </div>
    </Layout >
  )
}