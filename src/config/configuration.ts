export default () => ({
  port: Number(process.env.PORT) || 3001,

  supabase: {
    dbUrl: process.env.SUPABASE_URL,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },

  resend: {
    apiKey: process.env.RESEND_API_KEY,
    email: process.env.EMAIL,
  },
});
