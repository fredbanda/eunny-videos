import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu", "iconOpen", "iconClose"];

  connect() {
    this.menuVisible = false;
  }

  toggle() {
    this.menuVisible = !this.menuVisible;
    this.menuTarget.classList.toggle("hidden", !this.menuVisible);
    this.iconOpenTarget.classList.toggle("hidden", this.menuVisible);
    this.iconCloseTarget.classList.toggle("hidden", !this.menuVisible);
  }
}
