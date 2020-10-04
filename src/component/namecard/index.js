import { html } from 'fxjs';
import './namecard.css';

export const makeNameCard = (data, nameSvg) => html`
  <div class="namecard">
    <div class="head">
      <div class="logo">${data.logo ? `<img src="${data.logo}" alt="" />` : ''}</div>
      <div class="contact">
        <p>${data.email}</p>
        <p>${data.mobile}</p>
      </div>
    </div>
    <div class="name">${nameSvg}</div>
    <div class="address">${data.address}</div>
  </div>
`;
