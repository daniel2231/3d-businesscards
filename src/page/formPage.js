import { object, go, map, html } from 'fxjs';
import { $find, $findAll, $on, $val, $attr } from 'fxdom';
import './formPage.css';

import { makeBtn } from '../component/btn';
import { setObject } from '../store.js';
import { renderPage } from './method.js';
import namecardPage from './namecardPage.js';

const getInfos = ($page) =>
  go(
    $findAll('input', $page),
    map(($input) => [$attr('name', $input), $val($input)]),
    object
  );

export default {
  template: () => html`
    <div class="page form-page">
      <div class="input-container">
        <label class="info">
          이름:
          <input type="text" name="name" />
        </label>
        <label class="info">
          부서/직급:
          <input type="text" name="position" />
        </label>
        <label class="info">
          이메일:
          <input type="text" name="email" />
        </label>
        <label class="info">
          휴대폰:
          <input type="text" name="mobile" />
        </label>
        <label class="info">
          회사주소:
          <input type="text" name="address" />
        </label>
      </div>
      ${makeBtn({ title: '완료', klass: 'complete' })}
    </div>
  `,
  script: ($page) => {
    const $completeBtn = $find('.btn.complete', $page);

    $on('click', (e) => {
      setObject(getInfos($page));
      renderPage(namecardPage);
    })($completeBtn);
  }
};
