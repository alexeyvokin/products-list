import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

// eslint-disable-next-line import/prefer-default-export
export function registerVeeValidateRules() {
  extend('required', {
    ...required,
    message: 'Поле обязательно для заполнения',
  });

  extend('min_value', {
    validate(value, { minValue = 0 }) {
      if (Number(value) >= Number(minValue)) {
        return true;
      }

      return `Поле должно содержать число больше или равное ${minValue}`;
    },
    params: ['minValue'],
  });
}
