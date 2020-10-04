import { $qs } from 'fxdom';

const root = $qs('.root-container');

export const renderPage = (page) => {
  root.innerHTML = page.template();
  page.script(root.children[0]);
};
