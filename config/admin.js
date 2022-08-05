module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fff3733fbeba5b63b6defc2cfe6ba269'),
  },
});
