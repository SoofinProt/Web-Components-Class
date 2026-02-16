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
    this.fancy = false;
    this.emoji = "";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 10px;
        vertical-align: top;
      }

      :host([fancy]) .card {
  //background-color: pink;
  //border: 5px solid black;
  box-shadow: 10px 10px 20px rgba(0,0,0,0.3);
  transition: all 0.2s ease;
}

.emoji-float {
  display: none;
  font-size: 24px;
  margin-left: 8px;
  vertical-align: middle;
}

:host([fancy]) .emoji-float {
  display: inline-block;
  animation: floating 2s ease-in-out infinite;
}

  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }

  .card {
    border: 2px solid #ccc;
    padding: 16px;
    width: 300px;
    border-radius: 18px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
    transition: background-color 0.3 ease;
    background-color: white;
    height: 435px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .card-title {
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    border-radius: 4px;
    flex-shrink: 0;
  }

  .card-content {
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    min-height: 0;
  }

  details {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1;
  }

   details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
    cursor: pointer;
    flex-shrink: 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    //border: 2px solid black;
    text-align: left;
    padding: 8px;
    //overflow-y: auto;
    max-height: 100px;
    word-break: break-all;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  .card-description {
    text-align: left;
    margin-bottom: 16px;
    //overflow: auto;
    //overflow-y: auto;
  }

  .scroll-container {
    max-height: 55;
    overflow-y: auto;
    margin-bottom: 8px;
    flex: 1;
  }

  .card-button {
    display: block;
    width: fit-content;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    transition: background-color 0.3s ease;
   // margin-top: auto;
    text-align: center;
    flex-shrink: 0;
    margin: 8px auto 0 auto;
    text-decoration: none;
    }

    .card-button:hover {
      background-color: #0056b3;
    }
  `;
  }

openChanged(e) {
  console.log(e);
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
}

render() {
    return html`
      <section class="card" style="background-color: ${this.backgroundColor}">
        <h2 class="card-title">${this.title}</h2>
        <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-content">
          <div class="scroll-container">
            <p class="card-description"></p>
              <details ?open="${this.fancy}" @toggle="${this.openChanged}">
                <summary>
                  Description 
                  <span class="emoji-float">
                  ${this.emoji.length > 4 ? String.fromCodePoint(this.emoji) : this.emoji}</span>
                </summary>  
                <div>
                  <slot>${this.description}</slot>
                </div>
              </details>
            </div>
          <a href="${this.link}" class="card-button">${this.buttonText}</a>
        </div>
      </section>
    `;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      image: { type: String },
      description: { type: String },
      link: {type: String },
      buttonText: { type: String },
      backgroundColor: { type: String, attribute: 'background-color' },
      fancy: { type: Boolean, reflect: true },
      emoji: { type: String }   
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
