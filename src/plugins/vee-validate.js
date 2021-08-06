import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

function isValidHttpUrl(string) {
  try {
    const url = new URL(string);
    return ['http:', 'https:'].includes(url.protocol);
  } catch (_) {
    return false;
  }
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
