import { BaseComponent } from "../base.js";

export class ImageComponent extends BaseComponent {
  constructor(title: string, url: string) {
    super(
      "template",
      `
    <section class="image">
      <div class="image__holder"><img class="image__thumbnail" /></div>
      <p class="image__title"></p>
    </section>
`
    );

    // ${}으로 사용자 입력 값을 바로 넣을 수 있지만 Injection 공격에 취약해서 ❌

    const templete = this.element as HTMLTemplateElement;
    this.element = templete.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(".image__thumbnail")! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(".image__title")! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
