export default async (ctx, next) => {
  const setResponse = (
    statusCode,
    businessCode,
    message,
    success,
    data = {}
  ) => {
    ctx.status = statusCode;
    ctx.body = {
      businessCode,
      message,
      success,
      data,
    };
  };

  try {
    ctx.responseHandler = setResponse;

    await next();
  } catch (error) {
    setResponse(500, 5000, "服务器内部错误", false, { error: error.message });
  }
};
