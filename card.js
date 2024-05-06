#!/usr/bin/env node

import boxen from "boxen";
import prettyjson from "prettyjson";

// Your personal data
const data = {
  name: "",
  handle: "",
  twitter: "https://twitter.com/yourTwitter",
  github: "https://github.com/yourGithub",
  linkedin: "https://www.linkedin.com/in/yourLinkedin",
  labelTwitter: "Twitter",
  labelGitHub: "GitHub",
  labelLinkedIn: "LinkedIn",
  labelCard: "Card",
};

const prettyjsonOptions = {
  keysColor: "white",
  stringColor: "cyan",
  multilineStringColor: "cyan",
};

const body = prettyjson.render(
  {
    [data.labelPersonalWebsite]: data.personalWebsite,
    [data.labelUnibo]: data.uniboWebsite,
    [data.labelGitHub]: data.github,
    [data.labelLinkedIn]: data.linkedin,
    [data.labelTwitter]: data.twitter,
  },
  prettyjsonOptions
);

const card = boxen(body, {
  title: "title",
  titleAlignment: "center",
  margin: 1,
  padding: 1,
  borderStyle: "round",
  borderColor: "green",
});

console.log(card);
