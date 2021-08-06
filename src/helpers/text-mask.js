import conformToMask from 'text-mask-core/src/conformToMask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const priceMask = createNumberMask({
  thousandsSeparatorSymbol: ' ',
  prefix: '',
});

export function formatPrice(price) {
  const mask = conformToMask(price, priceMask, {
    guide: false,
    placeholderChar: '#',
  });
  return mask.conformedValue;
}
