require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 5001;

const CBS_API_URL =
  process.env.CBS_API_URL ||
  'http://localhost:8080/api/v1';

const CBS_WALLET_API_KEY =
  process.env.CBS_WALLET_API_KEY;

app.use(cors({
  origin: [
    'http://localhost:4200',
    'http://127.0.0.1:4200'
  ]
}));

app.use(express.json());


// ======================================================
// HEALTH CHECK
// ======================================================

app.get('/health', (req, res) => {
  res.json({
    success: true,
    service: 'skoola-wallet-backend'
  });
});


// ======================================================
// CBS LOGIN
// ======================================================

app.post('/cbs-login', async (req, res) => {

  try {

    const {
      email,
      userCode,
      password
    } = req.body;

    if (!password || (!email && !userCode)) {

      return res.status(400).json({
        success: false,
        message:
          'Email/user code and password are required.'
      });

    }

    if (!CBS_WALLET_API_KEY) {

      console.error(
        'CBS_WALLET_API_KEY is missing.'
      );

      return res.status(500).json({
        success: false,
        message:
          'Wallet backend is not configured.'
      });

    }


    const loginBody = {
      password: password
    };


    if (email) {
      loginBody.email = email;
    }


    if (userCode) {
      loginBody.userCode = userCode;
    }


    console.log(
      'Sending CBS login request to:',
      `${CBS_API_URL}/auth/login`
    );


    const response = await axios.post(

      `${CBS_API_URL}/auth/login`,

      loginBody,

      {
        headers: {

          'Content-Type':
            'application/json',

          Authorization:
            `Bearer ${CBS_WALLET_API_KEY}`

        }
      }

    );


    console.log(
      'CBS login successful:',
      response.data.user
        ? response.data.user.userCode
        : 'unknown user'
    );


    return res.json(
      response.data
    );


  } catch (error) {

    if (error.response) {

      console.error(
        'CBS login rejected:',
        error.response.status,
        error.response.data
      );

      return res
        .status(error.response.status)
        .json(error.response.data);

    }


    console.error(
      'CBS connection error:',
      error.message
    );


    return res.status(500).json({
      success: false,
      message:
        'Unable to connect to CBS.'
    });

  }

});

// ======================================================
// CBS DEPENDENTS
// ======================================================

app.get('/cbs-dependents', async (req, res) => {
  try {

    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.'
      });
    }

    const response = await axios.get(
      `${CBS_API_URL}/users/me/dependents`,
      {
        headers: {
          Authorization: authorization
        }
      }
    );

    return res.json(response.data);

  } catch (error) {

    if (error.response) {

      console.error(
        'CBS dependents rejected:',
        error.response.status,
        error.response.data
      );

      return res
        .status(error.response.status)
        .json(error.response.data);
    }

    console.error(
      'CBS dependents connection error:',
      error.message
    );

    return res.status(500).json({
      success: false,
      message: 'Unable to retrieve dependents from CBS.'
    });
  }
});

// ======================================================
// CBS WALLET BALANCE
// ======================================================

app.get('/cbs-balance', async (req, res) => {
  try {

    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.'
      });
    }

    const response = await axios.get(
      `${CBS_API_URL}/users/me/balance`,
      {
        headers: {
          Authorization: authorization
        }
      }
    );

    return res.json(response.data);

  } catch (error) {

    if (error.response) {

      console.error(
        'CBS balance rejected:',
        error.response.status,
        error.response.data
      );

      return res
        .status(error.response.status)
        .json(error.response.data);
    }

    console.error(
      'CBS balance connection error:',
      error.message
    );

    return res.status(500).json({
      success: false,
      message: 'Unable to retrieve balance from CBS.'
    });
  }
});

// ======================================================
// CBS MERCHANTS
// ======================================================

app.get('/cbs-merchants', async (req, res) => {
  try {

    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.'
      });
    }

    const response = await axios.get(
      `${CBS_API_URL}/merchants`,
      {
        headers: {
          Authorization: authorization
        }
      }
    );

    return res.json(response.data);

  } catch (error) {

    if (error.response) {

      console.error(
        'CBS merchants rejected:',
        error.response.status,
        error.response.data
      );

      return res
        .status(error.response.status)
        .json(error.response.data);
    }

    console.error(
      'CBS merchants connection error:',
      error.message
    );

    return res.status(500).json({
      success: false,
      message: 'Unable to retrieve merchants from CBS.'
    });
  }
});


// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, () => {

  console.log(
    `Skoola Wallet backend running on http://localhost:${PORT}`
  );

});