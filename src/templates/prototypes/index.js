import React from "react"

import Layout from "../../components/layout"
// import SEO from "../../components/seo"

export default () => {

  return (
    <Layout bodyClass='prototypes'>
      <div>
        <div className="container teal-container product-header-container">
          <div className="block product-header-block">
            <h1 className="white-text h1-product">Idea Lab: Prototypes</h1>
            <p className="centered">Work with us to turn your idea into a working proof-of-concept.</p>
            <a className="button raised-button" href="#">Get a Quote</a>

            <div className="build-spectrum">v You are Here</div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="product">
              <div className="product-body">
                <h2>1. Get a Quote</h2>
                <p>Lipsum</p>
                <a className="button raised-button" href="#">Get a Quote</a>

                <h2>2. We build it</h2>
                <p>Review Quote, make adjustments. Manage expectations. </p>

                <h2>3. Demo it</h2>
                <p>Lipsum.</p>
              </div>
              <div className="product-sidebar">
                Case Study: IATA
              </div>
            </div>

            ----

            <h2>Next Phase: Building an MVP ></h2>
            <p className="small">Going from Prototype to Product</p>
          </div>
        </div>

        <div className="container teal-container cta-container">
          <div className="block">
            <h2 className="h1-size white-text">Have something you want to prototype? Tell us about it!</h2>
            <p className="centered dark-teal-text">Send us a message, or email <a href="mailto:projects@purelyfunctional.co">projects@purelyfunctional.co</a> to tell us about your project. We'll follow up with you to find out more about your project and send to on a quote.</p>
            <form>
              <div className="form-field form-field-half">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your email"></input>
              </div>
              <div className="form-field form-field-half">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="Your company"></input>
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="How can we help you?"></textarea>
              </div>
              <button className="button cta-button" type="button">Email Us</button>
            </form>
          </div>
        </div>

        <div className="container very-light-grey-container articles-container">
          <div className="block articles-block">
            <div className="articles articles-three-accross">
              <div className="article design">
                <a className="article-image" href="#"></a>
                <div className="article-text">
                  <p className="article-tags">
                    <span className="article-tag">Prototyping</span>
                  </p>
                  <h2 className="article-title">
                    <a href="#">When and where you maybe SHOULD cut corners in product development.</a>
                  </h2>
                  <p className="article-details">
                    <a className="article-author" href="#">Kelli Borgonia</a>
                    <span className="article-dot-divider">●</span>
                    <span className="article-date">October 7, 2019</span>
                  </p>
                </div>
              </div>

              <div className="article design">
                <a className="article-image" href="#"></a>
                <div className="article-text">
                  <p className="article-tags">
                    <span className="article-tag">Prototyping</span>
                  </p>
                  <h2 className="article-title">
                    <a href="#">How prototypes are different for hackathons versus pitch decks.</a>
                  </h2>
                  <p className="article-details">
                    <a className="article-author" href="#">Kelli Borgonia</a>
                    <span className="article-dot-divider">●</span>
                    <span className="article-date">October 7, 2019</span>
                  </p>
                </div>
              </div>

              <div className="article design">
                <a className="article-image" href="#"></a>
                <div className="article-text">
                  <p className="article-tags">
                    <span className="article-tag">Prototyping</span>
                  </p>
                  <h2 className="article-title">
                    <a href="#">Launch: A game we built that needed 80% less tech to be effective.</a>
                  </h2>
                  <p className="article-details">
                    <a className="article-author" href="#">Jon Borgonia</a>
                    <span className="article-dot-divider">●</span>
                    <span className="article-date">October 7, 2019</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Layout >
  )
}