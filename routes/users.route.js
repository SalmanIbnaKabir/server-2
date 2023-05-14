const express = require('express');

const router = express.Router()



router.get('/register', (req, res) => {
  res.send('i am a get request at register route');
  res.end()
});

router.get('/login', (req, res) => {
  res.send('i am a get request at Login route');
  res.end()
});



router.post('/', (req, res) => {
  res.send('i am a post request at about route');
  res.end();
})
router.put('/', (req, res) => {
  res.send('i am a put requist at about route');
  res.end();
})
router.delete('/', (req, res) => {
  res.send('i am a delete requist at about route');
  res.end();
})


module.exports = router;