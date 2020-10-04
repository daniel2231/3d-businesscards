import formPage from './page/formPage';

const root = document.querySelector('.root-container');

if (true) {
  root.innerHTML = formPage.template;
  formPage.script();
}
