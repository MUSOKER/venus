const templates = require('../templates');
const { notificationDispatcher } = require('../services');

const dispatcher = async ({ payload }) => {
  const { type: eventName, body } = payload;
  const { name, otp } = body;
  let response;
  switch (eventName) {
    case 'LOGIN_OTP':
      // now send a mail through send in blue
      response = await notificationDispatcher.sendEmail({
        subject: 'One Time Password From Enseedling',
        receiver: body.to,
        htmlContent: templates.otpTemplate(otp, name),
      });
      break;
    default:
      console.log('No event found');
      break;
  }
  return response;
};

module.exports = {
  dispatcher,
};

// dispatcher({ payload: { type: 'LOGIN_OTP', body: { to: [{ email: 'rhtroy172@gmail.com' }], name: 'ROhit', otp: '123456' } } });
