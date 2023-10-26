const bcrypt = require ('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123.202';
  const hash = '$2b$10$H1kg1fITeAGFhCIAKUiO1.1XvqGSdOhDsxIcCBCyMfvmHFBcStBP6';
  const isMatch = await bcrypt.compare(myPassword,hash);
  console.log(isMatch);
}

verifyPassword();
