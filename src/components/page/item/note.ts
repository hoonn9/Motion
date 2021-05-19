// import { BaseComponent } from "../../component.js";
import { PageItemComponent } from "../item.js";

export class NoteComponent extends PageItemComponent {
  constructor(title: string, body: string) {
    super(
      `
    <section class="note">
      <h2 class="note__title"></h2>
      <p class="note__body"></p>
    </section>
`
    );

    const titleElement = this.element.querySelector(".note__title")! as HTMLParagraphElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(".note__body")! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
