function handler(req, res) {
  console.log('first');
  if (req.method === 'GET') {
    console.log('first');
    res.send({ hi: 'hi' });
  }
}

export default handler;
