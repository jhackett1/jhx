import * as React from "react"
import Dialog from "../Dialog"
import { TextBlock, GalleryBlock, UserStoriesBlock } from "../dialogBlocks"

const Project = () => (
  <Dialog
    caption="Camden Council"
    title="Supporting and triaging people in need with Beacon"
  >
    <TextBlock>
      <p>
        After finishing my work on the NHS COVID-19 app, I immediately switched
        to helping with the local government response, especially a project with
        Camden Council called Beacon.
      </p>
      <p>
        Like all local councils, Camden were overwhelmed with requests to help
        residents who were self-isolating. Interestingly, they were also
        inundated with offers of help from local community and voluntary
        organisations.
      </p>
      <p>
        The problem wasn't necessarily a lack of supply. It was just about
        effectively coordinating these needs—matching people in need with
        someone able to help them.
      </p>
    </TextBlock>

    <GalleryBlock
      images={[
        {
          src: "/assets/beacon/1.jpg",
          alt: "List of people",
        },
        {
          src: "/assets/beacon/2.jpg",
          alt: "Editing and assigning needs",
        },
      ]}
      caption="Managing lists of needs and people with Beacon"
    />

    <TextBlock>
      <p>
        Our research found that the bulk of needs were pretty simple and easily
        met: help with shopping or collecting prescriptions, say. A little bit
        of coordination would take most of these off the table, leaving only the
        most complex cases for the council's statutory services.
      </p>
      <p>Beacon is a tool researched, designed and built to do just that.</p>
      <p>
        I led the early design and software development, taking it from a{" "}
        <a href="https://photos.app.goo.gl/bkMHjnKEbaPq7wiU9">
          sticky note sketch
        </a>{" "}
        to a functional, production-ready piece of software.
      </p>
      <p>
        I facilitated several early workshops with Camden Council stakeholders,
        sketching out UI concepts, user journeys and "how might we" statements.
      </p>
    </TextBlock>

    <UserStoriesBlock caption="Example user needs for each of the major user groups">
      <li>
        <p>
          <strong>As a</strong> person who needs to stay at home,
        </p>
        <p>
          <strong>I need</strong> to get help from my community,
        </p>
        <p>
          <strong>So that</strong> I can keep myself and my loved ones safe
        </p>
      </li>
      <li>
        <p>
          <strong>As a</strong> healthy person with some free time,
        </p>
        <p>
          <strong>I need</strong> know who around me needs help,
        </p>
        <p>
          <strong>So that</strong> I can support my community
        </p>
      </li>
      <li>
        <p>
          <strong>As a</strong> council officer,
        </p>
        <p>
          <strong>I need</strong> to assign people in need with those who can
          meet their needs with,
        </p>
        <p>
          <strong>So that</strong> we reduce demand on statutory services
        </p>
      </li>
    </UserStoriesBlock>
    <TextBlock>
      <p>
        Because of the speed we needed to deliver at, I chose to build the app
        with Ruby on Rails. I also assessed low-code platforms like Salesforce,
        but the overhead of financing and contracting would have cancelled out
        any saving in development time.
      </p>
      <p>
        The tool had a lean foundation, essentially functioning as a catalogue
        of residents and their needs, plus a list of organisations able to meet
        them.
      </p>
      <p>Later, we added:</p>

      <ul>
        <li>
          The ability to join needs with the organisation or group responsible
          for meeting it{" "}
        </li>
        <li>
          Flows designed to assist contact centre staff checking in with
          vulnerable residents, essentially working as a script for those calls{" "}
        </li>
        <li>Automatic imports of NHS test and trace data</li>
        <li>
          Visual overhauls that made it quicker to perform common actions (fig.
          1-2)
        </li>
      </ul>
      <p>
        As the project advanced through discovery, alpha and beta, I was joined
        by more developers and designers, so I handed over some responsibilities
        and specialised in the overall technical architecture and design
        language of the product.
      </p>
    </TextBlock>

    <GalleryBlock
      startFrom={3}
      images={[
        {
          src: "/assets/beacon/3.jpg",
          alt: "Editing a task",
        },
        {
          src: "/assets/beacon/4.jpg",
          alt: "List of results, with map",
        },
      ]}
      caption="Earlier UI concepts, including a service directory with map directly accessible to residents"
    />

    <TextBlock>
      <p>
        Beacon is still being used by Camden Council and their partners today.
        Turning it into a general-purpose database of resident needs and
        community groups is being considered.
      </p>
      <p>
        The impact of the Beacon project is wider than that single piece of
        software: the design principles and research used to make Beacon were
        also taken and used by other councils and organisations, including on my
        own project, Boost, with Age UK.
      </p>
      <p>
        We used Beacon as a wedge to encourage a different way of working at
        Camden Council. In the guise of "training" we brought people from
        different departments together and formed new multidisplinary,
        cross-functional teams empowered to solve problems faster, with agility
        that was rare before the pandemic.
      </p>

      <p>
        <em>
          <a href="https://wearefuturegov.com/case-study/camden-covid19">
            Read more about Beacon
          </a>
        </em>
      </p>
    </TextBlock>
  </Dialog>
)

export default Project
