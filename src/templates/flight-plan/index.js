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
              <p>In 2019, I designed the UX / UI for a hypothetical airline ticketing platform. Unlike most contemporary websites that return hundreds of flight options for price-conscious flyers, this experience targets users that value a laid-back and hassle-free journey more than a cheap ticket. Built during a 24-hour hackathon, the web app pulled realtime flight information from Expedia along with airport congestion data in order to display a single round-trip ticket suggestion for the leisure-seeking traveler. 
              </p>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>The UX Concept</h3>

              <p>We spent an hour coming up with a concept and sketching a few notes to build upon. In typical web development, this process usually happens over days or weeks. </p>

              <p>The idea for the UI was very simple. Users would enter in their flight dates and destination, then the app would do the rest of the work.</p>

              <div className="image-box image-box-large">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-sketches-ui.png" alt="Sketches of the three app screens: Input UI, Loading, and Results." />
                <p className="caption">Sketches of the three app screens: Input UI, Loading, and Results.</p>
              </div>

              <p>We spent some time brainstorming environmental factors that might contribute to a person's travel itinerary. We sketched out an algorothim that would factor in a user's sensitivity to price and travel time.</p>

              <div className="image-box image-box-large">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-sketches-notes.png" alt="Notes on important environmental factors contributing to air travel." />
                <p className="caption">Notes on important environmental factors contributing to air travel.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Look &amp; Feel</h3>
              <p>When establishing an aesthetic, I like to start by choosing a typeface. This usually takes anywhere from 30 minutes to 2 hours. During a hackathon, that's a really long time. However, I think it is an extremely crucial part of my design process and it sets the tone and personality of a product. I wanted to use typefaces that were as "bouyant" and "delightful" as possible.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-typography.png" alt="An audit of possible fonts to use." />
                <p className="caption">An audit of possible fonts to use.</p>
              </div>

              <p>I chose to use Soleil as the primary typeface for it's extra tall x-height and round, geometric letters, and Bree as a secondary logo typeface.</p>

              <p>I expanded on the motif of "blue skies", and sketched a rough color palette:</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-sketches-color-palette.png" alt="A sketch of a possible color palette." />
                <p className="caption">A sketch of a possible color palette.</p>
              </div>

              <p>I got my inspiration for the illustrations from the quirky characters in the Headspace app, and from the character Alfur, a stick-figure elf in one of my favorite cartoons <em>Hilda</em>.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-alfur-inspiration.png" alt="Alfur, an elf from the cartoon Hilda." />
                <p className="caption">Alfur, an elf from the cartoon <em>Hilda</em>.</p>
              </div>
              
              <p>In terms of UX inspriation, I really love OpenCare, the platform that allows you to book a dentist in a matter of minutes through their delightful, simplified UI.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-opencare.png" alt="I love OpenCare's simple UI." />
                <p className="caption">I love OpenCare's simple UI.</p>
              </div>
                
              <p>Dropping placeholder Headspace illustrations into the UI along with my selected typefaces and colors gave me a look and feel that I liked:</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-ui-headspace.png" alt="A mockup of the UI with accurate colors and typography and a borrowed illustration." />
                <p className="caption">A mockup of the UI with accurate colors and typography and a borrowed illustration.</p>
              </div>

              <p>I quickly sketched my version of Alfur, then created final art with a color palette that matched the UI.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-sketches-illustration.png" alt="Sketches of Flight Plan Alfur." />
                <p className="caption">Character illustration sketches.</p>
              </div>

              <div className="image-box image-box-large">
                <img className="large-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-alfur.png" alt="My quirky blue traveler named Alfur." />
                <p className="caption">Final character illustrations.</p>
              </div>

              <p>If I had more time, I would create smooth vector art and animate the characters with CSS. These illustrations were done quickly in about 20 minutes in Adobe Draw, then cleaned up in Illustrator.</p>

              <p>The final core piece of the UI was my favorite. Airline ticket design is something print designers always drool over as a wishlist typography project. I jumped at my chance to make it a reality.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-ui-itinerary.png" alt="Mockup of Itinerary." />
                <p className="caption">Mockup of Itinerary.</p>
              </div>

              <p>I created a quick 5-minute mockup of the results/itinerary layout which would feature a huge pair of round-trip airline tickets, then the traveler's full itenerary. Since I was short on time, I just used blocks of color to indicate text in a layout. I would finalize the verbiage in the actual implementation.</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>The Final Product</h3>
              <p>The UI was definitely a collection of things that I really wanted to create as a designer, though I think it all came together nicely and with focused purpose. I'm extremely proud of this project as a fun, visual showpiece that was completed in less than a day.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-ui-step1.png" alt="The user enters in their destination and trip duration." />
                <p className="caption">The user enters in their destination and trip duration.</p>
              </div>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-ui-step2.png" alt="Results matching the user's preferences are retrieved from Expedia's API, and results are filtered based on the algorithm comprised of the user's travel preferences." />
                <p className="caption">Results matching the user's preferences are retrieved from Expedia's API, and results are filtered based on the algorithm comprised of the user's travel preferences.</p>
              </div>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-ui-step3.png" alt="A single set of round-trip tickets is displayed. Below the tickets is the user's entire itinerary starting from their commute from home to the airport, and ending with their return commute home." />
                <p className="caption">A single set of round-trip tickets is displayed. Below the tickets is the user's entire itinerary starting from their commute from home to the airport, and ending with their return commute home.</p>
              </div>

              {/* <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/flight-plan-ui-step3-closeup.png" alt="A closeup of the tickets." />
                <p className="caption">A closeup of the tickets.</p>
              </div> */}

            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>What I Learned</h3>
              <p>I had so much fun building Flight Plan. It was just Jon and I at the hackathon, though it was so fun to be able to build a tiny, fully complete project over the span of a weekend.</p>
              <p>Unfortunately, we had so much fun building that we didn't put enough time into our final presentation. The non-technical judges favored the presentations with exposition and slide decks filled with hypothetical business plans. It was disappointing, though now we know what to expect at this event.</p>
              <p>Nonetheless, I am proud of what we created. I think it is a solid demo.</p>
              <p>In the future, we intend to compete again with a different idea. Next time we will be equipped with a full team including a presenter, a UX researcher, and people who have actual airline industry experience.</p>

            </div>
          </div>
        </div>

      </div>
    </Layout >
  )
}