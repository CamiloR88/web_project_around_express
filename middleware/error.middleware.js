const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.log(err);

    if (err.name === "CastError") {
      const message = "Recurso no encontrado";
      error = new Error(message);
      error.status = 404;
    }
    if (err.name === "ValidatorError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message);
      error.status = 400;
    }
    res.status(error.status || 500).json({
      message: error.message || "Internal server error",
    });
  } catch (error) {
    next(error);
  }
};
export default errorMiddleware;
