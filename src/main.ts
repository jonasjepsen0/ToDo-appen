import { H1 } from "./view/atoms/atoms"
import { render } from "./utils/dom"

const title = H1()
title.textContent = "My Todo App"

render("app", title)
