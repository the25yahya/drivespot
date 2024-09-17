/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://drivespot_owner:Ll9OrDhaQo8U@ep-plain-shadow-a5x7sice.us-east-2.aws.neon.tech/drivespot?sslmode=require',
    }
  };