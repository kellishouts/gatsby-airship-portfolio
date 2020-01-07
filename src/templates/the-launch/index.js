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
            <h3>User-Centered Design</h3>
            <h1 className="white-text h1-product">Case Study: The Launch</h1>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Background</h3>
              <p>In 2018, we were challenged with creating a space-themed game that could be used as a communication tool to inspire corporate-level board members and executives to step out of their comfort zone and take a more creative approach to decision making.</p>
              <div className="image-box">
                <img className="small-image" src="https://kelli.airshipcms.io/assets/images/illustration-background.png" alt="How do you get executives to role-play a SciFi game?" />
                <p className="caption">How do you get executives to to role-play a SciFi game during a conference?</p>
              </div>
              <p>Randy Harrington, Ph.D., had confidently asserted that he would be using the game during a <em>real conference</em> the following month. No matter what, we needed to design, test, and deliver a product in 6 weeks.</p>
              <p>A typical product development cycle normally consists of thorough discovery and design phases, followed by a single development phase (or time permitting, iterative dev cycles).</p>
              <p>Unlike typical projects, we were given complete creative freedom to define what we were going to build and how we were going to build it, as long as the final deliverable was an engaging user experience.</p>
              <div className="image-box image-box-timeline">
                <img className="small-image" src="https://kelli.airshipcms.io/assets/images/timeline-centered.png" alt="Software Development vs. Launch Timeline" />
              </div>
              <p>Instead of following our normal software development process, we approached the project like a hybrid of a UX project and a hackathon. That meant ultra quick planning, thorough user testing, rapid development, and ad-hoc visual design. Above all else, we needed to prove that our game concept was viable. We needed to strategically engineer <em>fun</em>.
              </p>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>The Challenge</h3>
              <h2>We had 6-weeks to build a game.</h2>
              <p>We needed to design an engaging space-themed game in less than 6 weeks that would be:</p>
              <ol>
                <li><b>Simple</b>, so that participants understand the game objectives immediately.</li>
                <li><b>Inferential</b>, so that participants develop insights about strategic planning through the game.</li>
                <li><b>Flexible</b>, so a facilitator can make adjustments to the game setup, duration, and wrap-up.</li>
                <li><b>Scalable</b>, so the game can be played with an audience of 4 to upwards of 100 participants.</li>
              </ol>
              <div className="project-section-split">
                <div className="project-section-left">
                  <h4>Our Team</h4>
                  <p>
                    <b>Jon Borgonia</b>, Project Lead, Senior Architect, Test Group Moderator<br></br>
                    <b>Kelli Borgonia</b>, Game Designer, UX / UI Designer, Project Manager<br></br>
                    <b>Te Vallee</b>, Full-Stack Developer, SFX
                  </p>
                </div>
                <div className="project-section-right">
                  <h4>My Role</h4>
                  <p>For this project, I designed the game economy and script, developed the game’s overall UX and UI, and served as the project manager during the software development phase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Brainstorming</h3>
              <h2>We imagined science fiction as reality.</h2>
              <p>We watched <em>Star Trek</em>. We played co-op board games. We analyzed what made question-based deduction games like <em>Spyfall</em> successful. We were especially inspired by the co-op mobile game <em>Space Team</em>.</p>
              <p>We expanded on Randy’s concept that players need to <b>ask questions and launch probes</b> to investigate the possible hazards of space.</p>
              <p>We did our best to ensure that our game was simple, thought-provoking, and technically viable to build in the timeframe available.</p>
              
              <div className="image-box image-box-large">
                <img onClick={openLightLightbox("https://kelli.airshipcms.io/assets/images/launch-sketches-wide.jpg")} className="large-image" src="https://kelli.airshipcms.io/assets/images/launch-sketches-wide.jpg" alt="Initial UI Sketches" />
                <p className="caption">Notes on game UI, logic, intended outcomes, and software development.</p>
              </div>

              <p>Organizing all of our ideas, we mapped <b>key game mechanics</b>, <b>player actions</b>, and all possible <b>win/lose scenarios</b> to potential player insights.</p>
              
              <div className="image-box image-box-large">
                <img onClick={openLightLightbox("https://kelli.airshipcms.io/assets/images/flowchart-game-elements.png")}  className="large-image" src="https://kelli.airshipcms.io/assets/images/flowchart-game-elements.png" alt="Flowchart - Game Elements" />
                <p className="caption">Game mechanics, actions, and win/lose scenarios mapped to player insights.</p>
              </div>

              <h4>The Game Concept</h4>
              <p>Four players would be assigned different roles aboard a stranded spaceship. Together, they must analyze their environment, enable a limited number of ship defense systems, and decide on whether it was safe to proceed, or better to retreat from danger.</p>
              <div className="image-box">
                <img className="small-image" src="https://kelli.airshipcms.io/assets/images/illustration-initial-scenario.png" alt="How we imagined it would feel to play our imaginary SciFi scenario." />
                <p className="caption">How we imagined it would feel to play our imaginary SciFi scenario.</p>
              </div>
              <div className="image-box">
                <img className="small-image" src="https://kelli.airshipcms.io/assets/images/illustration-ui-mockups.png" alt="Early game UI mockups" />
                <p className="caption">Mockups showing the player actions split into different game UI screens.</p>
              </div>
              <p>I created a game economy where “powercell” units could be spent to ask questions or launch space probes. In this case, “design” was completely non-visual and instead consisted of a giant map of logic statements and game properties mapped out on a spreadsheet.</p>
              <div className="image-box">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/spreadsheet-screenshot.png" alt="A snippet of the game economy and logic mapped out on a spreadsheet." />
                <p className="caption">A snippet of the game economy and logic mapped out on a spreadsheet.</p>
              </div>
              <p>We had designed all the basic components of a game, though we needed to test our idea as soon as possible to validate if it was actually <em>fun</em>.</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Version 1</h3>
              <h2>We paper-prototyped the game.</h2>
              <p>We intended for the game to utilize mobile phones, so I cleaned up the mockups and created low-fidelity paper prototypes of the game UI. Elements that would later be programmed game functions were simulated using various game tokens and cards. </p>
              <div className="image-box">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/paper-mockups.png" alt="Digital components converted to a paper prototype for the first user test session." />
                <p className="caption">Digital components converted to a paper prototype for the first user test session.</p>
              </div>

              <h4>Test Group A</h4>
              <div className="image-box image-box-timeline">
                <img className="small-image" src="https://kelli.airshipcms.io/assets/images/timeline-03-test.png" alt="Timeline - Step 03: Test Group A" />
              </div>
              <p>We gathered a group of 4 friends to test our game on a Saturday morning. Jon set up the game and captured an audio recording of the entire session so we could review it later. We silently watched and both took notes as the game played out.</p>
              <div className="image-box image-box-photo">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/photo-group-a-2.jpg" alt="Thank you Alan, Laura, Te, Jen, and Justin!" />
                <p className="caption">Thank you Alan, Laura, Te, Jen, and Justin!</p>
              </div>
              <div className="image-box image-box-photo">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/photo-group-a-1.jpg" alt="Paper prototypes and repurposed board game tokens used during the first play test." />
                <p className="caption">Paper prototypes and repurposed board game tokens.</p>
              </div>
              <p>Users generally seemed to understand the game objectives and were fairly vocal throughout the game. There were moments of confusion, frustration, heated discussion, relief, and finally triumph when they successfully completed their space mission. After the game, Jon led a short discussion to gather feedback.</p>
              <p>The most surprising observation was that players used the question cards to sort and organize information. We weren’t initially planning to create any physical cards for the final game, though it seemed that the <b>game cards were a critical asset in driving player interaction.</b></p>
              <div className="test-summary">
                <div className="test-summary-column">
                  <h4>Things that worked</h4>
                  <ul>
                    <li>Unlimited time allowed players to make thoughtful decisions. </li>
                    <li>Players were very engaged.</li>
                    <li>Question cards were an unexpected success.</li>
                    <li>Players left feeling enthusiastic and triumphant.</li>
                    <li>Players commented that they “kept thinking about the game” and wanted to play again.</li>
                  </ul>
                </div>
                <div className="test-summary-column">
                  <h4>User frustrations</h4>
                  <ul>
                    <li>The names and colors of probes were unnecessarily misleading.</li>
                    <li>Prior knowledge of science fiction led to incorrect assumptions.</li>
                    <li>Subtle wording choices misled players about environmental factors.</li>
                    <li>There were too many ship defense systems to choose from.</li>
                    <li>Players did not feel enough pressure to conserve resources.</li>
                    <li>Question Cards were difficult to sort.</li>
                    <li>There was a lot of extraneous note-taking for basic game facts.</li>
                  </ul>
                </div>
                <div className="test-summary-column">
                  <h4>Things to improve</h4>
                  <ul>
                    <li>Rename probes so they are not misleading.</li>
                    <li>Explicitly state that players should not rely on prior knowledge about space.</li>
                    <li>Adjust wording in story content for clarity.</li>
                    <li>Decrease the total ship defense systems. Remove “weapons” so the game focuses on defensive strategic planning.</li>
                    <li>Decrease the amount of “powercell” resources.</li>
                    <li>Provide physical cards that players may obtain so they do not need to take notes about basic game facts.</li>
                    <li>Formalize the cards to be an intentional part of the game.</li>
                  </ul>
                </div>
              </div>
              
              <h4>How did we do?</h4>

              <div className="goals-summary">
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="passed">Passed</i></span> 
                  <span className="goal-title"><b>Simple</b></span> 
                  <span className="goal-description">Players understood the game objectives.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="passed">Passed</i></span> 
                  <span className="goal-title"><b>Inferential</b></span> 
                  <span className="goal-description">Players expressed insightful comments at the conclusion of the game.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="unknown">Unknown</i></span> 
                  <span className="goal-title"><b>Flexible?</b></span> 
                  <span className="goal-description">We need to build a working proof of concept to know for sure.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="failed">Failed</i></span> 
                  <span className="goal-title"><b>Not Scalable</b></span> 
                  <span className="goal-description">The paper prototype is not scalable. We need to digitize the physical game elements.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Version 2</h3>
              <h2>We got lost in translation.</h2>
              <h4>&ldquo;Hackathon&rdquo; Dev Sprint</h4>
              <p>We preemptively set up our second test session for the following Saturday. This gave us 1 week to build the game UI.</p>
              <p>We met up with Te Vallee in person to sync up for our development sprint. During a 6-hour hackathon-style Sunday sprint, we were able to complete about 60% of the core game logic and UI. </p>
              <div className="image-box image-box-large">
                <img onClick={openLightLightbox("https://kelli.airshipcms.io/assets/images/sketch-v1-all-screens-small.png")} className="large-image" src="https://kelli.airshipcms.io/assets/images/sketch-v1-all-screens-small.png" alt="Version 1 Sketch mockups." />
                <p className="caption">Version 1 mockups showing 4 player roles and various game outcomes.</p>
              </div>
              <p>Jon tackled game states and logic. Te worked on building out the UI and controls. I focused on layout, rudimentary styling and Q/A.</p>
              <p>At the end of the day, we distributed the remaining tickets to be tracked and completed through Github Projects over the next week. By Saturday, we had a rough imeplementation of the game UI completed.</p>
              <h4>Test Group B</h4>
              <div className="image-box image-box-timeline">
                <img className="small-image" src="https://kelli.airshipcms.io/assets/images/timeline-05-test.png" alt="Timeline - Step 05: Test Group B" />
              </div>
              <p>In our second test group, all players were asked to connect to the game session on their mobile phone. Each user had a unique role with specific actions in the game.</p>
              <div className="image-box image-box-photo">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/photo-group-b-1.jpg" alt="Thank you Brandon, Bob, Sean, and Manny!" />
                <p className="caption">Thank you Brandon, Bob, Sean, and Manny!</p>
              </div>
              <p>Five minutes after starting the game, we realized that <b>the digital game UI was was ineffective</b>. Several players experienced <b>technical difficulties</b> in syncing their device to the game. Even worse, participants were <b>staring at their phones</b> instead of looking at each other! This digital version of the game was <b>missing the engagement</b> we were able to quickly build up with the first test group.</p>
              <p>We quickly ended the test.</p>

              <h4>How did we do?</h4>

              <div className="goals-summary">
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="failed">Failed</i></span> 
                  <span className="goal-title"><b>Not Simple</b></span> 
                  <span className="goal-description">Players spent too much time studying the digital interface.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="unknown">Unknown</i></span> 
                  <span className="goal-title"><b>Inferential?</b></span> 
                  <span className="goal-description">Technical difficulties prevented players from getting to a point where inferences could be made.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="failed">Failed</i></span> 
                  <span className="goal-title"><b>Not Flexible</b></span> 
                  <span className="goal-description">Technical difficulties proved that the game was very inflexible.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="failed">Failed</i></span> 
                  <span className="goal-title"><b>Not Scalable</b></span> 
                  <span className="goal-description">Technical difficulties proved that the game was not scalable.</span>
                </p>
              </div>

              <h4>Reboot</h4>
              <p>Just in case there were technical difficulties, I had brought all the materials from the first game session as a backup. With the same test group, we rebooted the game using only the cards and paper mockups.</p>
              <div className="image-box image-box-photo">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/photo-group-b-3.jpg" alt="Tokens were used for planning ahead and allocating resources." />
                <p className="caption">Tokens were used for planning ahead and allocating resources.</p>
              </div>
              <p>With physical game pieces, players again intuitively understood what to do. The tactile nature of the cards made it easier to communicate with each other and visually organize information.</p>
              <div className="image-box image-box-photo">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/photo-group-b-2.jpg" alt="Players spent 10 minutes organizing cards. This was not an intended behavior." />
                <p className="caption">Players spent 10 minutes organizing cards. This was not an intended behavior.</p>
              </div>
              <p>Participants were engaged and excited, and again had a lot of fun playing the game.<b> Revised copy improved clarity</b> about the game rules. We did notice that <b>players spent too much time organizing game elements</b> rather than jumping into discussion, so we realized we would need to do something to reduce this point of friction in game play. </p>
              <blockquote>Sometimes the best solution is no-tech or low-tech.</blockquote>
              <p>Our most important takeaway: the game didn’t require a digital component. <b>The core game was still based on cards.</b></p>
              
              <div className="test-summary">
                <div className="test-summary-column">
                  <h4>Things that worked</h4>
                  <ul>
                    <li>Clearer setup instructions eliminated assumptions about the game context.</li>
                    <li>More abstract Probe names eliminated assumptions about probe functionality.</li>
                    <li>Probe icons with a bold background color differentiated Probe Cards from Question Cards.</li>
                  </ul>
                </div>
                <div className="test-summary-column">
                  <h4>User frustrations</h4>
                  <ul>
                    <li>The Game UI was too complex.</li>
                    <li>Divided player responsibilities did not add value to game play.</li>
                    <li>Cards were difficult to sort. </li>
                    <li>The game relied on a network connection. It took several minutes for 4 users to get set up.</li>
                  </ul>
                </div>
                <div className="test-summary-column">
                  <h4>Things to improve</h4>
                  <ul>
                    <li>Minimize the digital interface.</li>
                    <li>to make it easier to sort and organize Question Cards.</li>
                    <li>Ensure that the game is playable offline.</li>
                    <li>Add handheld player setup notes, or add setup instructions to the game UI.</li>
                    <li>Add an optional time constraint.</li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Version 3</h3>
              <h2>We simplified the UI to let the users truly shine.</h2>
              <p>What worked? Cards. When people could touch physical game pieces, they were engaged with the activity. This needed to be the focus of the game.</p>
              <p>The only thing the app really needed to do was serve as an input/output device in response to player actions. With this in mind, we <b>stripped out 75% of the digital game UI functionality.</b></p>
              <p>We also <b>simplified the rules</b> and user roles. Originally, we had created the roles of Captain, Chief Analyst, Commander, and Engineer. In practice, the separation of roles made things complex and negatively impacted gameplay. Omitting this complication made it easier to scale the game to larger group sizes.</p>
              <div className="image-box image-box-large">
                <img onClick={openLightLightbox("https://kelli.airshipcms.io/assets/images/sketch-v2-all-screens-small.png")} className="large-image" src="https://kelli.airshipcms.io/assets/images/sketch-v2-all-screens-small.png" alt="Four separate user flows were simplified to a single flow in the game UI." />
                <p className="caption">Four separate user flows were simplified to a single flow in the game UI.</p>
              </div>
              <p>Randy had noted that there would only be 1 hour available to play the game. We needed to account for this, so we <b>added a time constraint</b> as an optional game factor.</p>
              <h4>Test Group C</h4>
              <div className="image-box image-box-timeline">
                <img className="small-image" src="https://kelli.airshipcms.io/assets/images/timeline-07-test.png" alt="Timeline - Step 07: Test" />
              </div>
              <p>We ran a third test group the following weekend. This time, only a single digital device was needed as an input/output device. In addition, we limited the game play to 1 hour, to ensure that it worked with a time constraint.</p>
              <div className="image-box image-box-photo">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/photo-group-c-1.jpg" alt="Thank you Justin, Nix, Carlos, Jake and Aaron!" />
                <p className="caption">Thank you Justin, Nix, Carlos, Jake and Aaron!</p>
              </div>
              <div className="image-box image-box-photo">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/photo-group-c-2.jpg" alt="Color strips improved Question Cards, but colored probes still confused players." />
                <p className="caption">Color strips improved Question Cards, but colored probes still confused players.</p>
              </div>
              <p>The game was successful! It still had the original feel of the first game session, yet the <b>input device eliminated the amount of extraneous pieces needed</b> to play the game. </p>
              <div className="test-summary">
                <div className="test-summary-column">
                  <h4>Things that worked</h4>
                  <ul>
                    <li>Minimal digital game UI.</li>
                    <li>Mostly a card-based game.</li>
                    <li>Minimal setup instructions.</li>
                    <li>With a time constraint, users made faster, definitive decisions.</li>
                  </ul>
                </div>
                <div className="test-summary-column">
                  <h4>User frustrations</h4>
                  <ul>
                    <li>Probe colors were distracting.</li>
                    <li>Users didn’t realize powercells depleted when actions were performed.</li>
                  </ul>
                </div>
                <div className="test-summary-column">
                  <h4>Things to improve</h4>
                  <ul>
                    <li>Remove the color from probes.</li>
                    <li>Add a sound or visual alert when powercells are depleted.</li>
                    <li>Ensure that the game works offline.</li>
                  </ul>
                </div>
              </div>
              
              <h4>How did we do?</h4>

              <div className="goals-summary">
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="passed">Passed</i></span> 
                  <span className="goal-title"><b>Simple</b></span> 
                  <span className="goal-description">Players had very few questions about game setup and objectives.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="passed">Passed</i></span> 
                  <span className="goal-title"><b>Inferential</b></span> 
                  <span className="goal-description">Players expressed insightful comments at the conclusion of the game.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="passed">Passed</i></span> 
                  <span className="goal-title"><b>Flexible</b></span> 
                  <span className="goal-description">Variable team sizes are possible. An optional time constraint can be added during gameplay.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="unknown">Unknown</i></span> 
                  <span className="goal-title"><b>Scalable?</b></span> 
                  <span className="goal-description">We aren’t yet sure if the game can be easily replicated across multiple groups.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Visual Design &amp; Polish</h3>
              <h2>We shipped the product early!</h2>
              <p>We had 2 weeks to polish the game. Jon and Te refactored the game UI again, so that it could function entirely offline once it was loaded in a web browser.</p>

              <div className="image-box">
                <img className="medium-image" src="https://res.cloudinary.com/airship/image/upload/f_auto/v1576097634/media/gmail2_cerqn3.gif" alt="A click-through of the final game UI." />
                <p className="caption">A click-through of the final game UI.</p>
              </div>

              <p>I designed the final game to have a cohesive appearance across both the digital UI and the cards. I printed and mailed several card decks to Randy with 1 week to spare.</p>

              <div className="image-box">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/photo-game-assets.jpg" alt="Final game UI and professionally printed cards and instruction insert." />
                <p className="caption">Final game UI and professionally printed cards and instruction insert.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Final Deliverable</h3>
              <h2>We counted down to the final launch.</h2>
              <div className="image-box image-box-timeline">
                <img className="small-image" src="https://kelli.airshipcms.io/assets/images/timeline-10-launch.png" alt="Timeline - Step 10: Launch" />
              </div>
              <p>We held our breath during Randy’s conference. We were in call for technical support, though things must have gone smoothly, because we received no calls. Soon after the conference, Randy called with a report. </p>
              <div className="image-box image-box-large">
                <img onClick={openLightLightbox("https://kelli.airshipcms.io/assets/images/photo-conference-1.jpg")} className="large-image" src="https://kelli.airshipcms.io/assets/images/photo-conference-1.jpg" alt="In each group, participants organized game materials differently." />
                <p className="caption">In each group, participants organized game materials differently.</p>
              </div>
              <p>Teams sorted cards differently than in our test groups. Often, participants stood around a small round table, so they could all see the game components.</p>
              <p>Randy had modified the set up so that one person on a team was selected to be the “Computer Controller” in charge of the mobile device. This allowed the majority of the team members in each group focus on discussion.</p>
              <div className="image-box image-box-photo">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/photo-conference-2.jpg" alt="Participants generally had an enjoyable experience." />
                <p className="caption">Participants generally had an enjoyable experience.</p>
              </div>
              <p>Randy ran the game in a 1-hour time slot for the first game session. In subsequent sessions, he sometimes had to truncate the game to 30-minute sessions.  The flexibility of the game format allowed him to do this easily.</p>
              <p>We were a little worried that the game may have been too complex. We were only able to test the game on our peers (programmers and gamers), so we weren’t sure if it would translate to a less tech-savvy audience. I had intentionally designed the cards and UI with large type, bold icons and high-contrast colors. It paid off. There were no UI usability issues.</p>
              <p>In addition, the game UI was mobile responsive, web-browser-based, and offline-capable, so teams could load the game on either a phone, tablet, or laptop. We thought that a phone or tablet would be easier to manage, though in actual use, laptops were extremely convenient in being able to display information a group setting.</p>
              <blockquote className="long-quote">
                “Amazing that the Board was so wrapped up in the experience. I have never seen them get engaged with an exercise like this. It attracted the engineers and accountants as well as everyone else.” <span>— Arturo Fuente, Board Chair GTE Financial</span>
              </blockquote>
              <p>It was thrilling to hear that everything went so smoothly. The game even scaled well to a larger conference size of about 100 participants, each split into teams of 5 - 6 team members.</p>
              <div className="image-box image-box-large">
                <img onClick={openLightLightbox("https://kelli.airshipcms.io/assets/images/photo-conference-3.jpg")} className="large-image" src="https://kelli.airshipcms.io/assets/images/photo-conference-3.jpg" alt="The game scaled easily to 100-person conference." />
                <p className="caption">The game scaled easily to 100-person conference.</p>
              </div>
              <blockquote className="long-quote">
                “People approached the challenge very differently, but somehow they were able to come together at the end with a successful and unanimous decision.” <span>— Kelly Schraeder, CEO IQ Credit Union</span>
              </blockquote>
              <p>It was a lot of work to complete the project in such a compressed timeline. We were exhausted, yet excited about how successfully it was executed!</p>

              <h4>How did we do?</h4>

              <div className="goals-summary">
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="passed">Passed</i></span> 
                  <span className="goal-title"><b>Simple</b></span> 
                  <span className="goal-description">No hiccups in gameplay.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="passed">Passed</i></span> 
                  <span className="goal-title"><b>Inferential</b></span> 
                  <span className="goal-description">Participants connected the game concepts to workshop themes.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="passed">Passed</i></span> 
                  <span className="goal-title"><b>Flexible</b></span> 
                  <span className="goal-description">Randy was able to make up new rules ad-hoc.</span>
                </p>
                <p className="goals-summary-row">
                  <span className="goal-status"><i className="passed">Passed</i></span> 
                  <span className="goal-title"><b>Scalable</b></span> 
                  <span className="goal-description">The game works offline. It scales easily to a group of 100 users.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Key Reflections</h3>
              <h2>We built a better product.</h2>
              <p>Instead of sticking to our original game idea which set the stage for a chaotic and stressful situation, the final space scenario had evolved to focus on teamwork, communication, and true collaboration.</p>
              
              <div className="image-box">
                <img className="small-image" src="https://kelli.airshipcms.io/assets/images/illustration-chaos-vs-collaboration.png" alt="Chaos vs. Collaboration" />
                <p className="caption">Chaos vs. Collaboration</p>
              </div>
              
              <p>What did we discover?</p>
              <ul>
                <li><b>We were entrusted to design an end-to-end solution without any constraints.</b> Randy was fairly hands off from the project, and he trusted us to expand on his ideas to create the best possible product with polished execution.</li>
                <li><b>We were passionate.</b> When we have the opportunity to, we enjoy creating educational and inspirational games. We cared about what we were building and were invested in its success.</li>
                <li><b>We took ownership of improving the user experience.</b> Great UX was something we all cared about. It was not a single team member’s responsibility.</li>
                <li><b>We were not attached to the design or code.</b> We trashed 75% - 85% if the codebase by the end of the project, though doing so made the product more effective.</li>
              </ul>

              <p>This was hands-down the most creative, fun, and impactful product I have worked on in a while. I think we were successful because we were truly practicing the methodology reiterated in the game: <b>Do research to validate your ideas.</b>  We consistently maintained a user-centered mindset that spanned our entire workflow from ideation to testing to software development, and it has certainly shifted the way we build products today.</p>

            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Thank You</h3>
              <p>After the first conference, we continued to work on The Launch. The goals shifted to focus on replayability, distribution, and marketing. We worked closely with a bunch of awesome folks at Extreme Arts &amp; Sciences (Randy’s marketing company) to make this happen.</p>
              <blockquote className="long-quote">
                “I would work with you two any time anywhere. I am super impressed with your skill and most importantly your passion and professionalism.” <span>— Randy Harrington, CEO Extreme Arts &amp; Sciences</span>
              </blockquote>
              <h4>Extreme Arts &amp; Sciences</h4>
              <p>Special thanks to 
                  Randy Harrington, 
                  John Miller, 
                  Edwin Song, 
                  Ed Larison, 
                  Talia Rose, 
                  Adrian Leon, 
                  Alex Tebbs, 
                  Jainen Narain, 
                  Cisco Malpartida Smith,
                  and everyone who was either directly involved or available as additional support! Because of everyone’s hard work, we were able to collectively produce a marketing website, marketing videos, and a slide deck.</p>
              <h4>Playtesters</h4>
              <p>Thank you also to 
                  Alan Solidum, 
                  Laura Gonzales, 
                  Te Vallee, 
                  Jen Fernandez, 
                  Justin Hedani, 
                  Brandon Bennett, 
                  Bob Matcuk, 
                  Sean Nakamura, 
                  Manny Pilande, 
                  Justin Herdandez,
                  Nicole (Nix) Kinney,
                  Carlos Avila, 
                  Jake Vissering, and
                  Aaron Prenovost
                  for volunteering your Saturday mornings to be playtesters. It was a blast to work with everyone!
              </p>  
            </div>
          </div>
        </div>

      </div>
    </Layout >
  )
}