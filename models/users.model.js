import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    minlength: 2,
    // validate: {
    //   validator: (v) => {
    //     const avatarRegex =
    //       /^http:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})(\/[a-zA-Z0-9-]*)*\/?$/;

    //     return avatarRegex.test(v);
    //   },
    //   message: (props) => `${props.value} no es una URL válida`,
    // },
  },
});

const User = mongoose.model("User", userSchema);
export default User;
