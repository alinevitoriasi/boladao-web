interface IPost {
  _id: string;
  text: string;
  author: {
    username: string;
  };
}
