import * as React from "react"
import Dialog from "../Dialog"
import { TextBlock, GalleryBlock, UserStoriesBlock } from "../dialogBlocks"

const Project = () => (
  <Dialog
    caption="Hackney Council"
    title="Modern social care tools for Hackney"
  >
    <TextBlock>
      <p>
        I'm building a new collaborative suite of tools for social workers at
        Hackney Council.
      </p>
      <p>
        Hackney Council suffered a severe cyberattack in 2020, which knocked
        important case management software offline. We're helping them recover
        from that, but also aiming to build something much better than what came
        before.
      </p>
      <p>
        The software Hackney was using to run social care had several important
        limitations. It locked social workers into frustrating, inflexible
        processes that had to be followed precisely. It also made it difficult
        for people recieving care to understand what was happening with their
        case, or to feel like they had a say in it.
      </p>
      <p>
        It is a relic from an older, patriarchal model of running government
        services.
      </p>
    </TextBlock>

    <GalleryBlock
      images={[
        {
          src: "/assets/hackney/1.png",
          alt: "Shared plan",
        },
        {
          src: "/assets/hackney/4.png",
          alt: "Task list, allowing out of order completion",
        },
      ]}
      caption="Recent UI samples of the shared plan and task list"
    />

    <TextBlock>
      <p>
        One of the things I've been championing is the "shared plan"—a web app
        for securely and easily sharing information about a person's case with
        them and with trusted third parties, like their GP and loved ones (fig.
        1).
      </p>
      <p>
        For security, I looked at best practice from around the tech sector,
        eventually converging on a unique, expirable, revokable link with a
        memorable word for extra peace of mind.
      </p>
      <p>
        When I joined the project, about two dozen people were working as one
        single team. This turned out to cause problems with our flexibility and
        the time we had to actually get work done—agile rituals like stand-ups
        and sprint planning often took hours.
      </p>
      <p>
        I argued successfully to convert our single team into a group of much
        smaller teams. Each one worked independently, conducting design sprints,
        discoveries, alphas and betas as they saw fit. This makes it much easier
        to get work done, and to change direction as we learn new things.
      </p>
      <p>
        The most successful of these explored on the topic of "workflows" (fig.
        3).
      </p>
      <p>
        When a person asks for for social care help, they go through a
        predictable workflow, which starts with a screening, then an assessment
        of their needs, followed by a support plan and care package. After six
        months or so, it will be reviewed to see if it's still meeting their
        needs.
      </p>
    </TextBlock>

    <GalleryBlock
      startFrom={3}
      images={[
        {
          src: "/assets/hackney/3.png",
          alt: "Solution overview",
        },
      ]}
      caption="The user journeys supported by the upcoming workflow pilot"
    />

    <TextBlock>
      <p>
        I designed and built{" "}
        <a href="https://github.com/LBHackney-IT/lbh-core-pathway-pilot">
          an app
        </a>{" "}
        in TypeScript and Next.js to provide a better way of managing these
        workflows. It allows social workers to:
      </p>

      <ul>
        <li>
          Provide information out of order using a task list, rather than
          following a set order of steps (fig. 2)
        </li>
        <li>
          Has autosave and automatic version history inspired by Google Docs
          (fig. 3)
        </li>
        <li>
          Drastically reduces the information that needs to be collected,
          removing all duplication and relying on APIs to auto-populate it
          instead
        </li>
        <li>
          A handy side-by-side interface for reviewing existing work (fig. 4)
        </li>
      </ul>
      <p>
        On the project, we'd often find that often the features we built were
        not quite what was wanted, despite doing user research beforehand. This
        is partly down to the sheer complexity of social work practice. Rather
        than just doing one-off research sessions, I argued for a two month
        pilot, which would help us understand how the tools we'd made worked in
        situ, rather than in artificial research environment.
      </p>
    </TextBlock>

    <GalleryBlock
      startFrom={4}
      images={[
        {
          src: "/assets/hackney/2.png",
          alt: "Revision history",
        },
        {
          src: "/assets/hackney/5.png",
          alt: "Side-by-side reviews",
        },
      ]}
      caption="Screens from the workflow app, including the task list and side-by-side review screen"
    />

    <TextBlock>
      <p>
        Another challenge of working in Hackney was the lack of a mature design
        system. One existed, but it was not well understood by their permanent
        staff or regularly maintained. I overhauled the tooling, halving the
        size of the codebase without sacrificing any features and built up a new
        community of practice. There are now regular fortnightly sessions where
        people discuss contributions to{" "}
        <a href="https://design-system.hackney.gov.uk/">the design system</a>.
      </p>
      <p>
        Nationally, the ecosystem of software for social care is stagnant:
        dominated by one or two massive players who provide monolithic software
        on long, expensive contracts.
      </p>
      <p>
        Our approach of building small, open source tools that are loosely
        joined together could well provide a healthy alternative for the rest of
        the country too.
      </p>
      <p>The workflow pilot is set to begin in October 2021.</p>
    </TextBlock>
  </Dialog>
)

export default Project
