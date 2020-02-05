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
            <h1 className="white-text h1-product">Flight Plan</h1>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>About the Project</h3>
              <p>In 2019, I designed an experimental UX / UI for a hypothetical airline ticketing platform. Unlike most contemporary websites that return hundreds of flight options for price-conscious flyers, this experience targets users that value a laid-back and hassle-free experience more than a cheap ticket. Built during a 24-hour hackathon, the website pulled realtime flight information from Expedia along with airport congestion data in order to display a live result that isolated a single ticket suggestion for the leisure-seeking traveler. 
              </p>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>The User Experience</h3>
              <p>The experience was designed so that the user entered the website and input the start to end date of their leisure travel plans.</p>
              <p>PIC - FIRST SCREEN</p>
              <p>Delightful loading screens cycled in succession while the user waited for results to be returned. The average load time was 12 seconds, so a different illustration rotated through the loading screen every three seconds.</p>
              <p>PIC - LOADING SCREENS</p>
              <p>A single set of round-trip tickets displayed after the optimal flight was calculated. The user's entire itinerary starting from their commute to the airport was displayed under the bold ticket graphics.</p>
              <p>PIC - RESULTS</p>
              <p>Prices were de-emphasized. The experiment was to eliminate all the options that typically cluttered the screen during ticket selection. All preferences such as price sensitivity, number of connections, and time of day were pushed to the background as configurable settings. In theory, the user we were targeting was not price-sensitive, though they did care about having the simplest stress-free commute possible. </p>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Visual Design Inspiration</h3>
              <p>Whenever I participate in a hackathon, I like to integrate something that I haven't done before and want to try out visually. For this project, I was set on creating a well-designed (yet hypothetical) user experience. I was inspired by Opencare's experience for scheduling a dentist. Seeing dentists and buying airline tickets can be stressful. This experiment imagines that it doesn't have to be.</p>
              <p>PIC - OPENCARE</p>
              <p>Airline ticket design is also something print designers always drool over as a wishlist typography project. I jumped at my chance to make it a reality.</p>
              <p>PIC - TICKET INSPIRATION</p>
              <p>Finally, I really love the feel of Headspace. I wanted to create really polished loading animations and quirky characters. I didn't quite have time to animate the characters in a 24-hour period, though I did enjoy illustrating them.</p>
              <p>PIC - HEADSPACE</p>
              <p>Although this was pretty much just a collection of things I just <b>really like</b> and <b>wanted to try</b> as a designer, I think it all came together nicely. I'm extremely proud of this project as a fun, visual showpiece.</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Development</h3>
              <p>The project buildout was extremely fun. Jon and I both feel strongly that hackathon projects should integrate <em>real code</em> as much as possible, so we built actual working components that pulled from real APIs. Jon did all the heavy lifting for all the backend programming. I worked on building the layouts, styling the page components, and animating the graphics I had designed.</p>
              <p>At the time of the hackathon, we were had temporary developer access to Expedia's API. Once our license expired, we swapped out the live connection with a static mock dataset.</p>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>What I Learned</h3>
              <p>I had so much fun building Flight Plan. It was just Jon and I at the hackathon, though it was so fun to be able to build a tiny, fully complete project during the span of a weekend.</p>
              <p>It, we had so much fun that we didn't put enough time into our final presentation. When we presented, it didn't seem to matter that we had built a complete prototype with a working API. The non-technical judges wanted exposition and a lengthy slide deck. It was extremely disappointing, though now we know what to expect at this event.</p>

              <p>We intend to compete again this year with a different idea, this time equipped with a full team including a presenter, a UX researcher, and two people who have actual experience working in the airline industry.</p>

            </div>
          </div>
        </div>

      </div>
    </Layout >
  )
}