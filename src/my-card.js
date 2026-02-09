import { LitElement, html, css } from 'lit';



export class MyCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 12px;
      }

      .card {
        width: 300px;
        border: 2px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        background-color: beiuge;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-4px);
      }

      .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .card-content {
        padding: 16px;
      }

      .card-title {
        font-size: 24px;
        font-weight: bold;
        margin: 0 0 12px 0;
        color: #333;
      }

      .card-description {
        font-size: 14px;
        color: #666;
        margin: 0 0 16px 0;
        line-height: 1.5;
      }

      .card-link {
        display: inline-block;
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s ease;
      }

      .card-link:hover {
        background-color: #0056b3;
      }

      /* Fancy state styling */
      :host([fancy]) .card {
        border-color: #ff6b6b;
        background: linear-gradient(135deg, #fff 0%, #ffe6e6 100%);
        animation: pulse 2s infinite;
      }

      :host([fancy]) .card-title {
        color: #ff6b6b;
      }

      @keyframes pulse {
        0%, 100% {
          box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
        }
        50% {
          box-shadow: 0 4px 16px rgba(255, 107, 107, 0.6);
        }
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
    this.title = 'Refleciton4button';
    this.image = 'images/sunset.jpg';
    this.description = 'This button does blah blah.';
    this.link = '#';
    this.fancy = false;
  }

  render() {
    return html`
      <div class="card">
        <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-content">
          <h2 class="card-title">${this.title}</h2>
          <p class="card-description">
            ${this.description}
            <slot></slot>
          </p>
          ${this.link && this.link !== '#' ? html`
            <a class="card-link" href="${this.link}" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);