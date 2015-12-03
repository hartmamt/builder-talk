import React from "react";
import { render } from "react-dom";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "./src";

import preloader from "./src/utils/preloader";


const images = {
  catalyst: require("./assets/catalyst-screen.png")
};

require("normalize.css");
require("./src/themes/default/index.css");

preloader([images.catalyst]);

render(
  <Spectacle>
    <Deck transition={["zoom", "slide"]} transitionDuration={500}>
      <Slide transition={["zoom"]} bgColor="primary" notes="Where I work, what I do, what I am trying to solve">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Builder
        </Heading>
        <Heading size={1} fit caps>
          NPM Task Runner
        </Heading>
        <Heading size={1} fit caps textColor="black">
          By FormidableLabs
        </Heading>
        <Link href="https://github.com/FormidableLabs/builder">
          <Text bold caps textColor="tertiary">View on Github</Text>
        </Link>
        <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
      </Slide>
      <Slide bgColor="black" notes="If you work with node modules, you are familiar with mangaging tasks in your package.json.  You can do very useful things like run tests, generate builds, run development servers, publish to NPM.  Builder helps take your npm tasks and make them composable.">
      <Heading size={1} fit caps>
        Builder
      </Heading>
      <Text  textColor="white" margin="20px 0px 0px">
        Takes your npm tasks and makes them composable, controllable from a single point, and flexible.
      </Text>
      </Slide>
      <Slide bgColor="black" notes="Why do we need yet another build tool?">
      <Heading size={1} fit caps>
        Why do we need this?
      </Heading>
      <List textColor="white">
        <ListItem>NPM good for dependencies</ListItem>
        <ListItem>For multiple similar repositories, package.json doesn't scale</ListItem>
      </List>
      </Slide>
      <Slide transition={["zoom", "fade"]} bgColor="black" notes="<ul><li>talk about that</li><li>and that</li></ul>">
        <Heading size={1} fit caps>
          10+ repositories like this
        </Heading>
        <CodePane
          source={require("raw!./assets/deck.badpackage")}
          margin="20px auto"
        />
      </Slide>
      <Slide bgColor="black">
        <Heading size={1} fit caps>
          Basically every box here is a component in NPM...
        </Heading>
        <Image src={images.catalyst.replace("/", "")} height="600"/>
      </Slide>
      <Slide bgColor="black">
      <Heading size={1} fit caps>
        That doesn't scale!
      </Heading>
      <List textColor="white">
        <ListItem>NPM task changes are tedious</ListItem>
        <ListItem>Repository structure</ListItem>
        <ListItem>Managing files such as webpack.config</ListItem>
      </List>
      </Slide>
      <Slide bgColor="black">
      <Heading size={1} fit caps>
        Enter Builder!
      </Heading>
      <List textColor="white" >
        <ListItem>Single Point of Control</ListItem>
        <ListItem>Flexibility</ListItem>
        <ListItem>You Can Give Up</ListItem>
      </List>
      </Slide>
      <Slide bgColor="black">
      <Heading fit caps>
        Single Point of Control
      </Heading>
      <Text textColor="white" textAlign="left"><br/>A way to define a specific set of tasks / configs / etc. for one "type" of project.</Text>
      <Text textColor="white" textAlign="left"><br/>For example, we have an ever-expanding set of related repos for our Catalyst student portal project which all share a nearly-identical dev / prod / build workflow.</Text>
      </Slide>
      <Slide bgColor="black">
      <Heading fit caps>
        Flexibility
      </Heading>
      <Text textColor="white" textAlign="left"><br/>Many tools exist for controlling JavaScript workflows / dev lifecycles.</Text>
      <Text textColor="white" textAlign="left"><br/>These work great if everything is within the workflow but fall apart when you want to be slightly different.</Text>
      <Text textColor="white" textAlign="left"><br/>Builder allows fine grain task overriding by name, where larger composed tasks still say the same and allow a specific repo to be different.</Text>
      </Slide>
      <Slide bgColor="black">
      <Heading fit caps>
        You can give up
      </Heading>
      <Text textColor="white" textAlign="left"><br/>One of the main goals of builder is to remain very close to a basic npm workflow.</Text>
      <Text textColor="white" textAlign="left"><br/>A section exists in the Builder guide on how to abandon the use of Builder in a project and revert everything from archetypes back to vanilla npm package.json scripts, dependencies and devDependencies.</Text>
      </Slide>
      <Slide bgColor="black">
      <Heading size={1} fit caps>
        Overview
      </Heading>
      <List textColor="white">
        <ListItem>Tool for consuming package.json scripts commands</ListItem>
        <ListItem>Provides sensible / flexible defaults</ListItem>
        <ListItem>Support various scenarios ("archetypes") for your common use cases across multiple projects</ListItem>
      </List>
      </Slide>
      <Slide bgColor="black">
      <Heading size={1} fit caps>
        Archetypes
      </Heading>
      <List textColor="white">
        <ListItem>Opinionated and deal with common scenarios for your projects</ListItem>
        <ListItem>Dictate file structure</ListItem>
        <ListItem>Standard configurations</ListItem>
        <ListItem>Development workflows</ListItem>
        <ListItem>One per project</ListItem>
      </List>
      </Slide>
      <Slide bgColor="black">
        <Heading size={1} fit>
          Archetype provides
        </Heading>
        <List textColor="white">
          <ListItem>package.json with builder friendly script tasks</ListItem>
          <ListItem>dependencies and dev dependencies to build, test, etc</ListItem>
          <ListItem>config files for all script tasks</ListItem>
          <ListItem>local script (package.json tasks) resolved before Archetype's</ListItem>
        </List>
      </Slide>
      <Slide bgColor="black">
      <Heading size={1} fit>
        Builder Archetype: React Component
      </Heading>
      <Text textAlign="left" textColor="white">Installation</Text>
      <CodePane
        source={require("raw!./assets/deck.installation")}
        margin="20px auto"
      />
      <Text textAlign="left" textColor="white">Project Structure</Text>
      <CodePane
        source={require("raw!./assets/deck.projectstructure")}
        margin="20px auto"
      />
      </Slide>
      <Slide transition={["slide"]} bgColor="black">
        <Heading caps fit textColor="primary">
          Now we have tasks
        </Heading>
        <Text textColor="white" textAlign="left"><br/>The underlying concept is that builder script commands are simply NPM-friendly package.json script commands</Text>
        <CodePane
          source={require("raw!./assets/deck.tasks")}
          margin="20px auto"
        />
      </Slide>
      <Slide transition={["slide"]} bgColor="black">
        <Heading caps  textColor="primary">
          Build related
        </Heading>
        <CodePane
          source={require("raw!./assets/deck.tasks2")}
          margin="20px auto"
        />
      </Slide>
      <Slide transition={["slide"]} bgColor="black">
        <Heading caps  textColor="primary">
          Local dev server
        </Heading>
        <CodePane
          source={require("raw!./assets/deck.tasks4")}
          margin="20px auto"
        />
      </Slide>
      <Slide transition={["slide"]} bgColor="black">
        <Heading caps  textColor="primary">
          Testing
        </Heading>
        <CodePane
          source={require("raw!./assets/deck.tasks5")}
          margin="20px auto"
        />
      </Slide>
      <Slide bgColor="black">
        <Heading size={1} fit>
          Summary
        </Heading>
        <List textColor="white">
          <ListItem>Definitely use if you have multiple similar repositories</ListItem>
          <ListItem>Only React Archetype exists right now</ListItem>
          <ListItem>Easy way to get started with webpack, testing, and publishing to NPM</ListItem>
        </List>
      </Slide>
      <Slide transition={["zoom", "fade"]} bgColor="primary">
        <Heading caps fit>Questions?</Heading>
      </Slide>
      <Slide transition={["zoom", "fade"]} bgColor="black">
        <Heading caps fit>Quick Start / Demo</Heading>
        <Text textAlign="left" textColor="white"><br/>$ npm install -g yo<br/>
$ npm install -g generator-formidable-react-component<br/>
$ yo formidable-react-component</Text>
      </Slide>
    </Deck>
  </Spectacle>
, document.getElementById("root"));
