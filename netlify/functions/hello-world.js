exports.handler = async () => {
  return {
    statusCode: 200,
    body: `hello world!\nI have a ${process.env.MY_SECRET}`,
  };
};
