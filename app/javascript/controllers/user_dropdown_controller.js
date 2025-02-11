import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu"];

  connect() {
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
    this.menuTarget.classList.toggle("hidden", !this.visible);
  }

  hide(event) {
    if (!this.element.contains(event.target)) {
      this.visible = false;
      this.menuTarget.classList.add("hidden");
    }
  }
}
