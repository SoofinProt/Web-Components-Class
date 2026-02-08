import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Defualt Title";
    this.image = "";
    this.description = "Defualt description.";
    this.link = "#";
    this.buttonText = "Details";
    this.backgroundColor = "#ffffff";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 10px;
        vertical-align: top;
      }

  .card {
    border: 2px solid #ccc;
    padding: 16px;
    width: 300px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
    transition: background-color 0.3 ease;
  }

  .card-title {
    text-align: center;
    font-size: 1.5rem;
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    border-radius: 4px;
  }

  .card-context {
    padding: 8px 0;
    display: flex;
    flex-direction: column;
  }

  .card-descption {
    text-align: left;
    margin-bottom: 16px;
  }

  .card-button {
    display: block;
    margin: 0 auto;
    width: fit-content;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    }

    .card-button:hover {
      background-color: #0056b3;
    }
  `;
  }

render() {
    return html`
      <section class="card" style="background-color: ${this.backgroundColor}">
        <h2 class="card-title">${this.title}</h2>
        <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-content">
          <p class="card-description">${this.description}</p>
          <a href="${this.link}" class="card-button">${this.buttonText}</a>
        </div>
      </section>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: {type: String },
      buttonText: { type: String },
      backgroundColor: { type: String, attribute: 'background-color' }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
