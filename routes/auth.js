const express = require('express');
const router = express.Router();

const redirect_uri = 'http://127.0.0.1:3000/auth/callback'

// redirect to oauth provider
router.get('/login', (req, res, next) => {
  const response_type = 'token';
  const client_id = process.env.GOOGLE_Client_ID
  const redirect_url = 'https://accounts.google.com/o/oauth2/v2/auth';
  const scope = 'profile';
  const state = 'spacy';
  const prompt = 'select_account';
  const login_hint = 'email address'
  const queryParams = `response_type=${response_type}&client_id=${client_id}&scope=${scope}&state=${state}&prompt=${prompt}&login_hint=${login_hint}&redirect_uri=${redirect_uri}`


  res.redirect(redirect_url + '?' + queryParams);
});

router.get('/callback', function(req, res, next) {
  var state = req.query.state
  var access_token = req.query.access_token
  var token_type = req.query.token_type
  var expires_in = req.query.expires_in
  console.log(state)
  console.log(access_token)
  console.log(token_type)
  console.log(expires_in)
})


module.exports = router;
