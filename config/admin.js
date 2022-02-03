module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c955f10db5cfbd1312c60a8c98854451'),
  },
});
