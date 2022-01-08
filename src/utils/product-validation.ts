import { restUtils } from "./rest-utils";

const constraints = {
  name: {
    maxLength: 100,
  }
};

export const ProductValidation = {
  name: (name: string) => {
    if (name === undefined || name === null) return restUtils.responseMessage.missingParam('name');
    if (name.length === 0) return restUtils.responseMessage.missingParam('name');
    if (name.length > constraints.name.maxLength) return restUtils.responseMessage.wrongCharactersAmount('name', 'maximum', constraints.name.maxLength);

    return '';
  },
  price: (price: string) => {
    if (price === undefined || price === null) return restUtils.responseMessage.missingParam('price');
    const parsedPrice = parseFloat(price);
    if (Object.is(parsedPrice, NaN)) return restUtils.responseMessage.invalidValue('price', 'number');
    if (parsedPrice <= 0) return restUtils.responseMessage.invalidValue('price', 'positive number');

    return '';
  },
};