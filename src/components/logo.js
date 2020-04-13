import React from "react"
import VisuallyHidden from "@reach/visually-hidden"

import { LogoIcon } from "./icons"

const Logo = ({ theme = "black", ...props }) => (
  <div {...props}>
    <LogoIcon
        aria-hidden
        className="h-full w-auto"
        logoColor={theme}
    />
    <VisuallyHidden>
      <h1>TaxxWiz</h1>
    </VisuallyHidden>
  </div>
)

export default Logo
