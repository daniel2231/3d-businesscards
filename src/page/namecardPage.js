import { html } from 'fxjs';
import { Store } from '../store.js';
import { makeNameCard } from '../component/namecard';
import { svgConvert } from '../util/textToSvg';

export default {
  template: async () => {
    return html` <div class="page namecard-page">${makeNameCard(Store, svgConvert(Store.name))}</div> `;
  },
  script: () => {
    console.log(Store);
  }
};
