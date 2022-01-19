import * as React from "react"
import Dialog from "../Dialog"
import { TextBlock, GalleryBlock, UserStoriesBlock } from "../dialogBlocks"

const Project = () => (
  <Dialog
    caption="Buckinghamshire Council"
    title="Hyperlocal service directories with open data standards"
  >
    <TextBlock>
      <p>
        I planned, designed and built an{" "}
        <a href="https://scout-and-outpost.netlify.app/">
          API-first directory of community services
        </a>{" "}
        for Buckinghamshire's{" "}
        <a href="https://familyinfo.buckinghamshire.gov.uk">
          {" "}
          family information service
        </a>
        .
      </p>
      <p>
        I connected the tool with national data sources from Ofsted, and wrote
        scripts to transform existing data to match an{" "}
        <a href="https://openreferraluk.org/">emerging data standard</a>.
      </p>
      <p>
        The directory emphasises location-based search to show users results in
        their local community. It also makes it easy for users to log in and
        maintain their own listings, freeing up council time and money.
      </p>
    </TextBlock>
    <GalleryBlock
      images={[
        {
          src: "/assets/outpost/2.jpg",
          alt: "Mobile search UI",
        },
        {
          src: "/assets/outpost/1.jpg",
          alt: "Desktop result UI",
        },
      ]}
      caption="Examples of the app's UI on different devices"
    />
    <TextBlock>
      <p>
        It’s not enough to show people the services near them. Google Maps can
        do that. To make a directory effective, you need to show coverage areas,
        accessibility information and be sensitive to the problems residents may
        face.
      </p>

      <p>
        Following a data standard makes these jobs easier. Once a few
        directories have a standard in common, it's easier for others to adapt
        this information, building on this work to create their own products on
        top of the existing data infrastructure.
      </p>
    </TextBlock>
    <GalleryBlock
      startFrom={3}
      images={[
        {
          src: "/assets/outpost/3.png",
          alt: "The OpenReferral UK standard",
        },
      ]}
      caption="The data model of the OpenReferral UK standard"
    />

    <TextBlock>
      <p>
        Balancing the data standard with the particular, parochial needs of our
        client was difficult. Tailoring to meet the needs of this one team would
        limit re-use potential.
      </p>
      <p>
        The solution turned out to be a custom fields feature. Now, admin users
        could define their own flexible UI to store arbitrary data in a text
        input, checkbox or select box.
      </p>
      <p>
        This was the secret weapon we needed to fully meet the data standard and
        give a much greater level of freedom to users.
      </p>
    </TextBlock>

    <UserStoriesBlock caption="Example user needs for each of the major user groups">
      <li>
        <p>
          <strong>As a</strong> resident in need,
        </p>
        <p>
          <strong>I need</strong> to see the support available around me,
        </p>
        <p>
          <strong>So that</strong> I can help myself and my loved ones
        </p>
      </li>
      <li>
        <p>
          <strong>As a</strong> resident who provides a community service,
        </p>
        <p>
          <strong>I need</strong> to let people in the area know,
        </p>
        <p>
          <strong>So that</strong> I can help my community
        </p>
      </li>
      <li>
        <p>
          <strong>As a</strong> council officer,
        </p>
        <p>
          <strong>I need</strong> to keep track of what services are available
          in the community and how they're being used,
        </p>
        <p>
          <strong>So that</strong> we can intervene if needed
        </p>
      </li>
    </UserStoriesBlock>

    <TextBlock>
      <p>
        The Outpost platform is being used by two different services, with half
        a dozen more interested. We're also looking at creating a SaaS offering
        for the product, to simplify onboarding and better meet the mission of
        bringing data standards to the sector.
      </p>
      <p>
        I recently gave a{" "}
        <a href="https://www.youtube.com/watch?v=X4yj-S6jIwo">
          conference talk
        </a>{" "}
        about the work.
      </p>
    </TextBlock>
  </Dialog>
)

export default Project
