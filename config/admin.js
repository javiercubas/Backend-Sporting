module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd66b13baad31e41e0b45d20967a4614a'),
  },
});
