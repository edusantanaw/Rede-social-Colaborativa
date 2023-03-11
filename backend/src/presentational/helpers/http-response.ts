function badRequest(message: string) {
  return {
    statusCode: 400,
    body: message,
  };
}

function created(data: unknown) {
  return {
    statusCode: 200,
    body: data,
  };
}

function error(error: Error) {
  return {
    statusCode: 400,
    body: error.message,
  };
}

function ok(data: unknown) {
  return {
    statusCode: 200,
    body: data,
  };
}
function noContent() {
  return {
    statusCode: 204,
    body: "no_content",
  };
}

function serverError(e: unknown) {
  return {
    statusCode: 500,
    body: e,
  };
}

export { badRequest, created, error, ok, noContent, serverError };
