export const restUtils = {
  responseStatus: {
    // 200
    OK: 200,
    CREATED: 201,
    // 400
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    // 500
    INTERNAL_SERVER: 500,
  },

  responseMessage: {
    deletedRows: (rowsQuantity: number) => {
      return `Deleted ${ rowsQuantity } row${ rowsQuantity === 1 ? '' : 's' }.`;
    },
    error: 'Something went wrong. Try again later.',
    invalidValue: (param: string, validValue?: string) => {
      return `${ capitalize(param) } has invalid value.${ validValue ? ` Expected ${ validValue }.` : '' }`;
    },
    invalidType: (param: string, validType: string) => {
      return `${ capitalize(param) } has invalid type. Expected ${ validType }.`;
    },
    missingParam: (param: string) => {
      return `${ capitalize(param) } is missing.`;
    },
    notFound: (resource: string) => {
      return `${ capitalize(resource) } not found.`;
    },
    updatedRows: (rowsQuantity: number) => {
      return `Updated ${ rowsQuantity } row${ rowsQuantity === 1 ? '' : 's' }.`;
    },
    valueAlreadyInUse: (param: string) => {
      return `${ capitalize(param) } is already in use.`;
    },
    wrongCharactersAmount: (param: string, amountType: string, amountLimit: number) => {
      return `${ capitalize(param) } can has ${ amountType } ${ amountLimit } character${ amountLimit === 1 ? '' : 's' }.`;
    },
  },
};

function capitalize(word: string) {
  return word[0].toLocaleUpperCase() + word.slice(1);
};
