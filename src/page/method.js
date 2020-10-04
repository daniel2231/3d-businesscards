import { $qs } from 'fxdom';

const root = $qs('.root-container');

export const renderPage = async (page) => {
  root.innerHTML = await page.template();
  page.script(root.children[0]);
};
