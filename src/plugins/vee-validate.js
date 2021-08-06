import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

function isValidHttpUrl(string) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
  return !!pattern.test(string);
}

// eslint-disable-next-line import/prefer-default-export
export function registerVeeValidateRules() {
  extend('required', {
    ...required,
    message: 'Поле обязательно для заполнения',
  });

  extend('url', value => {
    if (isValidHttpUrl(value)) {
      return true;
    }

    return 'Поле должно содержать url-адрес, начинающийся с http';
  });
}
