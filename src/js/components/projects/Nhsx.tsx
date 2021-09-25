import * as React from "react"
import Dialog from "../Dialog"
import { TextBlock, GalleryBlock, UserStoriesBlock } from "../dialogBlocks"

const Project = () => (
  <Dialog caption="NHSX" title="A digital contact tracing app for the NHS">
    <TextBlock>
      <p>I led the early research and design of the NHS COVID-19 app.</p>

      <p>
        I spent several weeks at the outset of the pandemic on-site at the NHSX
        offices in Elephant and Castle, figuring out how to translate a vague
        brief about "digital contact tracing" into reality.
      </p>

      <p>
        The now-familiar principles of anonymised Bluetooth contact tracing were
        entirely new back in February 2020. There were no working
        implementations to look at. The native{" "}
        <a href="https://covid19.apple.com/contacttracing">
          Apple and Google APIs
        </a>{" "}
        for this functionality were still six months away. I had to do
        everything for the first time.
      </p>

      <p>
        The idea of entering positive test results into the app and anonymously
        transmitting contact data to alert others originated at this time.
      </p>

      <p>
        We conducted guerilla user research out on the streets of London, and
        managed to successfully demonstrate the Bluetooth contact recording
        technology on the Bakerloo line.
      </p>

      <p>
        The{" "}
        <a href="https://service-manual.nhs.uk/design-system">
          NHS design system
        </a>{" "}
        is best at presenting static content rather than fast-changing
        information, so I had to invent totally new design patterns to represent
        contact tracing operations and statuses.
      </p>
      <p>
        I came up with simple language and visual aids to describe how the app
        works, along with writing push notifications to encourage people to take
        action without causing alarm.
      </p>
      <p>
        Although our team started small, as the pandemic became more serious and
        government restrictions were introduced, more people from more agencies
        joined the team. Many were entirely new to user-centred design and
        needed a lot of convincing to take what we were learning seriously.
      </p>
      <p>
        The biggest challenge of the project was building personal trust with
        all these different kinds of people, from a dozen companies and
        government agencies, quickly. None of us had ever worked together before
        and all had incompatible approaches to the work.
      </p>
      <p>
        Later in the project, the best use of time was less about drawing on
        Figma or doing research, but arguing for bringing in the right kind of
        experts (for example, in digital privacy) into the team.
      </p>
      <p>
        I fought hard to make sure user needs formed part of the strategy—often
        physically tracking down important decision-makers between meetings. I
        sat in several meetings where I was the only person without a Wikipedia
        entry.
      </p>
    </TextBlock>

    <GalleryBlock
      images={[
        {
          src: "https://via.placeholder.com/300x500.jpg",
          alt: "Foo caption",
        },
        {
          src: "https://via.placeholder.com/300x500.jpg",
          alt: "One",
        },
        {
          src: "https://via.placeholder.com/300x500.jpg",
          alt: "Two",
        },
      ]}
      caption="Early concept screens, which closely resemble those used in the app today"
    />
    <UserStoriesBlock caption="Example user needs from our first week of work">
      <li>
        <p>
          <strong>As a</strong> person without symptoms,
        </p>
        <p>
          <strong>I need</strong> to know if I need to isolate myself,
        </p>
        <p>
          <strong>So that</strong> I can keep my loved ones safe
        </p>
      </li>
      <li>
        <p>
          <strong>As a</strong> person with symptoms,
        </p>
        <p>
          <strong>I need</strong> to test whether I have coronavirus,
        </p>
        <p>
          <strong>So that</strong> I can keep myself and my loved ones safe
        </p>
      </li>
      <li>
        <p>
          <strong>As a</strong> person with symptoms,
        </p>
        <p>
          <strong>I need</strong> to safely tell those I've been in contact
          with,
        </p>
        <p>
          <strong>So that</strong> I can keep them safe
        </p>
      </li>
    </UserStoriesBlock>
    <TextBlock>
      <p>
        I argued hard to delay launching the app until later in the pandemic,
        when a more holistic test and trace programme existed, rather than
        rushing it into the world, which turned out to be the right call.
      </p>
      <p>
        The project was the most difficult and emotionally taxing of my career,
        and had plenty of tough moments. But, given how long the app has been in
        the world for, and the number of people using it, it's probably saved
        lives.
      </p>
    </TextBlock>
  </Dialog>
)

export default Project
