import conformToMask from 'text-mask-core/src/conformToMask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const priceMask = createNumberMask({
  thousandsSeparatorSymbol: ' ',
  prefix: '',
});

export function formatPrice(phone) {
  const phoneMask = conformToMask(phone, priceMask, {
    guide: false,
    placeholderChar: '#',
  });
  return phoneMask.conformedValue;
}
