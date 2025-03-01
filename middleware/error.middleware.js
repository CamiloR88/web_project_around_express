const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.log(err);

    if (err.name === "CastError") {
      const message = "Recurso no encontrado";
      error = new Error(message);
      error.status = 400;
    }
    if (err.name === "ValidatorError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message);
      error.status = 400;
    }
  } catch (error) {
    next(error);
  }
};
export default errorMiddleware;
