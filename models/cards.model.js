import mongoose from "mongoose";

const cardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    // validate: {
    //   validator: (v) => {
    //     const linkRegex =
    //       /^http:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})(\/[a-zA-Z0-9-]*)*\/?$/;

    //     return linkRegex.test(v);
    //   },
    //   message: (props) => `${props.value} no es una URL válida`,
    // },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Card = mongoose.model("Card", cardsSchema);
export default Card;
