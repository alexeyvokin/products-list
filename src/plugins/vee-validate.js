import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

// eslint-disable-next-line import/prefer-default-export
export function registerVeeValidateRules() {
  extend('required', {
    ...required,
    message: 'Поле обязательно для заполнения',
  });
}
