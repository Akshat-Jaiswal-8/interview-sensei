/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://interviewDb_owner:npg_DZX2zhFB5NIS@ep-wispy-moon-a5rwhfmm-pooler.us-east-2.aws.neon.tech/interviewDb?sslmode=require",
  },
};
