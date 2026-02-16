import { LitElement, html, css } from "lit";

export class MyCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },

    
      description: { type: String },

      fancy: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

    
        --my-card-fancy-bg: #ffe6e6;
        --my-card-fancy-border: 2px solid #ff6b6b;
        --my-card-fancy-shadow: 0 4px 16px rgba
      }

      .card {
        width: 300px;
        border: 2px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        background-color: beige;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease;
      }

      .card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-3px);
      }
      :host([fancy]) .card {
        border: var(--my-card-fancy-border);
        background: var(--my-card-fancy-bg);
        box-shadow: var(--my-card-fancy-shadow);
      }

      .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
      }

      .card-content {
        padding: 16px;
      }

      .card-title {
        font-size: 20px;
        font-weight: 700;
        margin: 0 0 12px 0;
        color: #333;

        /* uniformity */
        line-height: 1.2;
        min-height: 48px; /* ~2 lines */
        overflow: hidden;
      }

      details summary {
        text-align: left;
        font-size: 16px;
        padding: 8px 0;
        cursor: pointer;
      }

      details[open] summary {
        
      }

      details div {
        border: 2px solid #000;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
        background: #fff;
      }

      .card-link {
        display: inline-block;
        margin-top: 12px;
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.2s ease;
      }

      .card-link:hover {
        background-color: #0056b3;
      }

      @media (max-width: 768px) {
        .card {
          width: 100%;
          max-width: 400px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.link = "";
    this.fancy = false; 
  }


  openChanged(e) {
      this.fancy = e.target.hasAttribute("open");
  }

  render() {
    return html`
      <div class="card">
        ${this.image
          ? html`<img class="card-image" src="${this.image}" alt="${this.title}" />`
          : ""}

        <div class="card-content">
          <h2 class="card-title">${this.title}</h2>

          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot></slot>
              ${this.description
                ? html`<div>${this.description}</div>`
                : ""}
            </div>
          </details>

          ${this.link
            ? html`
                <a
                  class="card-link"
                  href="${this.link}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              `
            : ""}
        </div>
      </div>
    `;
  }
}

customElements.define("my-card", MyCard);