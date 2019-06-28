import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Button from "../../src/components/Slider/Button";
import "antd/dist/antd.css";

storiesOf("Button", module)
  .add("with text", () => <Button label={"Test Text"} />)
  .add("with border", () => (
    <Button label="Button with Border" bordered onClick={action("clicked")} />
  ))
  .add("With icon", () => (
    <Button icon="user">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
