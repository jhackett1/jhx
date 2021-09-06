import * as React from "react"
import Dialog from "../Dialog"
import { TextBlock, GalleryBlock, UserStoriesBlock } from "../dialogBlocks"

const Project = () => (
  <Dialog caption="NHSX" title="A digital contact tracing tool for the NHS">
    <TextBlock>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a eros
        augue. Nullam facilisis et felis vel interdum. Quisque aliquet quam eu
        dui vulputate, ac laoreet ex egestas.
      </p>
      <p>
        Pellentesque lacinia sed magna eu venenatis. In scelerisque, risus a
        iaculis bibendum, metus orci tristique ex, pharetra ultricies urna nisl
        in mi. Pellentesque at molestie dui.
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
      caption="Example caption here"
    />
    <UserStoriesBlock caption="Example caption here">
      <li>
        <p>
          <strong>As a</strong> foo,
        </p>
        <p>
          <strong>I need</strong> a bar,
        </p>
        <p>
          <strong>So that</strong> I can su
        </p>
      </li>
      <li>
        <p>
          <strong>As a</strong> foo,
        </p>
        <p>
          <strong>I need</strong> a bar,
        </p>
        <p>
          <strong>So that</strong> I can su
        </p>
      </li>
      <li>
        <p>
          <strong>As a</strong> foo,
        </p>
        <p>
          <strong>I need</strong> a bar,
        </p>
        <p>
          <strong>So that</strong> I can su
        </p>
      </li>
    </UserStoriesBlock>
    <TextBlock>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a eros
        augue. Nullam facilisis et felis vel interdum. Quisque aliquet quam eu
        dui vulputate, ac laoreet ex egestas.
      </p>
      <p>
        Pellentesque lacinia sed magna eu venenatis. In scelerisque, risus a
        iaculis bibendum, metus orci tristique ex, pharetra ultricies urna nisl
        in mi. Pellentesque at molestie dui.
      </p>
    </TextBlock>
  </Dialog>
)

export default Project
