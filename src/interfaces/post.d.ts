interface IPost {
  _id: string;
  text: string;
  type: Array<string>;
  author: {
    username: string;
  };
}
