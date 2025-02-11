// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import { Application } from "@hotwired/stimulus"
import UserDropdownController from "./controllers/user_dropdown_controller"
import NavbarController from "./controllers/navbar_controller"

const application = Application.start()
application.register("user-dropdown", UserDropdownController)
application.register("navbar", NavbarController)

export { application }
