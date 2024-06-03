const checkRequiredFields = (receivedFields, requiredFields) => {
  for (let i = 0; i < requiredFields.length; i += 1) {
    const currentField = requiredFields[i];
    if (!(currentField in receivedFields)) {
      return '"name" is required';
    }
  }
};

const checkRequiredQuantityField = (receivedFields, requiredFields) => {
  for (let i = 0; i < requiredFields.length; i += 1) {
    const currentField = requiredFields[i];
    if (!(currentField in receivedFields)) {
      return '"quantity" is required';
    }
  }
};

const checkSaleFields = (currentObject, requiredFields) => {
  for (let c = 0; c < requiredFields.length; c += 1) {
    const currentRequiredField = requiredFields[c];
    if (!(currentRequiredField in currentObject)) {
      return `"${currentRequiredField}" is required`;
    }
  }

  return null;
};

const checkRequiredSaleFields = (receivedFields, requiredFields) => {
  for (let i = 0; i < receivedFields.length; i += 1) {
    const currentObject = receivedFields[i];

    const missingFieldMessage = checkSaleFields(currentObject, requiredFields);
    if (missingFieldMessage) {
      return missingFieldMessage;
    }
  }

  return null;
};

module.exports = {
  checkRequiredFields,
  checkRequiredSaleFields,
  checkRequiredQuantityField,
};