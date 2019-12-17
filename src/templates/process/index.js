import React, { useState } from "react"

import Layout from "../../components/layout"

const flowChart = {
  analyze: {
    application: [1, 2],
    dev_workflow: [2, 3],
    sass_product: [1, 2, 3, 4],
    game_prototype: [1, 2, 4]
  },
  design: {
    application: [1, 4],
    dev_workflow: [2],
    sass_product: [1, 2, 3, 4],
    game_prototype: [1]
  },
  implement: {
    application: [1, 2, 3, 4],
    dev_workflow: [2, 3],
    sass_product: [1, 2, 3, 4],
    game_prototype: [1, 2, 3]
  }
}

export default () => {
  let [projectType, setProjectType] = useState()
  const onClickProjectType = (type) => {
    return () => {
      type = type === projectType ? null : type
      setProjectType(type)
    }
  }

  const flowChartItemIsActive = (column, item) => flowChart[column] && projectType && flowChart[column][projectType].includes(item) ? ' active' : ''

  return (
    <Layout bodyClass='process'>
      {/* <SEO {...content.pageMetadata} /> */}
      <div className="container white-container flowchart-container">
        <div className="block flowchart-block">
          <h3>We Love Process</h3>
          <p className="centered">The smoothest projects are 80% planning, iteration, and testing (and 20% polish). Form follows function. Or maybe, form is function?</p>
          <div className="flowchart">

            <div className="flowchart-column flowchart-analyze">
              <h4>Analyze</h4>
              <p>Break down the project into functional, strategic, and presentational components.</p>
              <ul className="flowchart-long list-analyze">
                <li className={`item1${flowChartItemIsActive('analyze', 1)}`}>
                  <h5>Requirements</h5>
                  <p> Determine requirements and priorities with client. Minimize scope.</p>
                </li>
                <li className={`item2${flowChartItemIsActive('analyze', 2)}`}>
                  <h5>Objectives</h5>
                  <p> Determine KPIs, build a strategy for measuring goals.</p>
                </li>
                <li className={`item3${flowChartItemIsActive('analyze', 3)}`}>
                  <h5>Research</h5>
                  <p>Before, gather information on actual use from actual users.</p>
                </li>
                <li className={`item4${flowChartItemIsActive('analyze', 4)}`}>
                  <h5>End-User Tests</h5>
                  <p>After, Run tests on consumer end-users to test prototype.</p>
                </li>
              </ul>
            </div>
            <div className="flowchart-column flowchart-design">

              {/* Non-Semantic Element */}
              <div className="flowchart-arrow"></div>

              <h4>Design</h4>
              <p>Propose possible solutions by utilizing diagrams, mockups, and ample documentation.</p>
              <ul className="flowchart-long list-design">
                <li className={`item1${flowChartItemIsActive('design', 1)}`}>
                  <h5>UX</h5>
                  <p>end user process, functional layer, wireframes, visual hierarchy</p>
                </li>

                <li className={`item2${flowChartItemIsActive('design', 2)}`}>
                  <h5>DX</h5>
                  <p>Dev Experience soemthing dev process something.</p>
                </li>

                <li className={`item3${flowChartItemIsActive('design', 3)}`}>
                  <h5>Admin Workflow</h5>
                  <p>Map out efficient workflow for the people managing and maintaining.</p>
                </li>

                <li className={`item4${flowChartItemIsActive('design', 4)}`}>
                  <h5>Architecture</h5>
                  <p>Information Architecture, software architecture.</p>
                </li>

                {/* <li>
                    <h5>Software Architecture</h5>
                    <p>Something information on something something.</p>
                    <p>Establish Content Hierarchy and Organize the Data.</p>
                  </li> */}
              </ul>
            </div>

            <div className="flowchart-column flowchart-implement">

              {/* Non-Semantic Element */}
              <div className="flowchart-arrow"></div>

              <h4>Implement</h4>
              <p>Execute and test one or more solutions in an iterative development and feedback loop.</p>
              <ul className="flowchart-long list-implement">
                <li className={`item1${flowChartItemIsActive('implement', 1)}`}>
                  <h5>UI</h5>
                  <p>Prototype, iterative design, aesthetic layer.</p>

                  {/* Non-Semantic Element */}
                  <div className="flowchart-small-arrow"></div>

                  {/* Non-Semantic Element */}
                  <div className="flowchart-loop-arrow"></div>
                </li>

                <li className={`item2${flowChartItemIsActive('implement', 2)}`}>
                  <h5>Development</h5>
                  <p>Something information on something. integration.</p>

                  {/* Non-Semantic Element */}
                  <div className="flowchart-small-arrow"></div>
                </li>

                <li className={`item3${flowChartItemIsActive('implement', 3)}`}>
                  <h5>Internal Tests</h5>
                  <p>Something information on something something.</p>
                </li>

                <li className={`item4${flowChartItemIsActive('implement', 4)}`}>
                  <h5>Polish</h5>
                  <p>Something information on something something.</p>
                </li>
              </ul>
            </div>

            {/* Non-Semantic Element */}
            <div className="flowchart-end-arrow"></div>

          </div>

          <ul className="flowchart-project-types">
            <li onClick={onClickProjectType('application')} className={projectType === 'application' ? 'active' : ''}>Micro Web App</li>
            <li onClick={onClickProjectType('dev_workflow')} className={projectType === 'dev_workflow' ? 'active' : ''}>Dev Workflow</li>
            <li onClick={onClickProjectType('sass_product')} className={projectType === 'sass_product' ? 'active' : ''}>Product</li>
            <li onClick={onClickProjectType('game_prototype')} className={projectType === 'game_prototype' ? 'active' : ''}>Game Prototype</li>
          </ul>

          {/* <p className="centered">The smoothest projects are 80% planning, iteration, and testing (and 20% polish). Form follows function. Or maybe, form is function?</p> */}
          {/* <p className="centered">Documenting, discussing, and diagramming objectives results in a more efficient workflow and a more polished product. Once the goals of any project clear, design and development seamlessly follow functional objectives.</p> */}

          {/* <div className="feature-link">
              <a className="button button-outline-to-solid" href="#">More on Process <span className="inline-arrow"></span></a>
            </div> */}
        </div>
      </div>

      <div className="container">
        <div className="block">
          <div className="greydient">
            <div className="very-light-grey">very-light-grey</div>
            <div className="light-grey">light-grey</div>
            <div className="medium-light-light-grey">medium-light-light-grey</div>
            <div className="medium-light-grey">medium-light-grey</div>
            <div className="medium-grey">medium-grey</div>
            <div className="medium-dark-grey">medium-dark-grey</div>
            <div className="medium-dark-dark-grey">medium-dark-dark-grey</div>
            <div className="dark-grey">dark-grey</div>
            <div className="darker-grey">darker-grey</div>
            <div className="very-dark-grey">very-dark-grey</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}