const httpErrorMap = {
  SUCCESSFUL: 200,
  NO_CONTENT: 204,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
};

const mapStatusHTTP = (status) => httpErrorMap[status];

module.exports = mapStatusHTTP;