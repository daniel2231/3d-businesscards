import { html } from 'fxjs';
import { Store } from '../store.js';
import { makeNameCard } from '../component/namecard';

export default {
  template: () => html` <div class="page namecard-page">${makeNameCard(Store)}</div> `,
  script: () => {
    console.log(Store);
  }
};
