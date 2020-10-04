import { html } from 'fxjs';
import { Store } from '../store.js';

export default {
  template: () => html`
    <div>
      네임카드
      <div>name: ${Store.name}</div>
      <div>address: ${Store.address}</div>
      <div>name: ${Store.name}</div>
      <div>name: ${Store.name}</div>
      <div>name: ${Store.name}</div>
    </div>
  `,
  script: () => {
    console.log(Store);
  }
};
