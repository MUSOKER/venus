const magicLinkTemplate = (name, token) => {
  const template = `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
      
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
      <!-- Web Font / @font-face : BEGIN -->
      <!--[if mso]>
          <style>
              * {
                  font-family: 'Roboto', sans-serif !important;
              }
          </style>
      <![endif]-->
  
      <!--[if !mso]>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
      <![endif]-->
  
      <!-- Web Font / @font-face : END -->
  
      <!-- CSS Reset : BEGIN -->
      
      
      <style>
          /* What it does: Remove spaces around the email design added by some email clients. */
          /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
          html,
          body {
              margin: 0 auto !important;
              padding: 0 !important;
              height: 100% !important;
              width: 100% !important;
              font-family: 'Roboto', sans-serif !important;
              font-size: 14px;
              margin-bottom: 10px;
              line-height: 24px;
              color: #8094ae;
              font-weight: 400;
          }
          * {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              margin: 0;
              padding: 0;
          }
          table,
          td {
              mso-table-lspace: 0pt !important;
              mso-table-rspace: 0pt !important;
          }
          table {
              border-spacing: 0 !important;
              border-collapse: collapse !important;
              table-layout: fixed !important;
              margin: 0 auto !important;
          }
          table table table {
              table-layout: auto;
          }
          a {
              text-decoration: none;
          }
          img {
              -ms-interpolation-mode:bicubic;
          }
      </style>
  
  </head>
  
  <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f5f6fa;">
      <center style="width: 100%; background-color: #f5f6fa;">
          <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa">
              <tr>
                 <td style="padding: 40px 0;">
                      <table style="width:100%;max-width:620px;margin:0 auto;">
                          <tbody>
                              <tr>
                                  <td style="text-align: center; padding-bottom:25px">
                                      <a href="#"><img style="height: 40px" src="https://bafybeig776tbjsisz3w3553h2oboq5olceixt7geo2yrstnioe7g3bxgim.ipfs.dweb.link/download.png" alt="logo"></a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff;">
                          <tbody>
                              <tr>
                                  <td style="padding: 30px 30px 15px 30px;">
                                      <h2 style="font-size: 18px; color: #6576ff; font-weight: 600; margin: 0;">Confirm Your E-Mail Address</h2>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="padding: 0 30px 20px">
                                      <p style="margin-bottom: 10px;">Hi ${name},</p>
                                      <p style="margin-bottom: 10px;">Welcome! <br> You are receiving this email because you have registered on our site.</p>
                                      <p style="margin-bottom: 10px;">Click the link below to active your  account.</p>
                                      <p style="margin-bottom: 25px;">This link will expire in 30 minutes and can only be used once.</p>
                                      <a href="https://enseedling-internship.onrender.com/user/verify?login_token=${token}" style="background-color:#6576ff;border-radius:4px;color:#ffffff;display:inline-block;font-size:13px;font-weight:600;line-height:44px;text-align:center;text-decoration:none;text-transform: uppercase; padding: 0 30px">Verify Email</a>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="padding: 0 30px">
                                      <h4 style="font-size: 15px; color: #000000; font-weight: 600; margin: 0; text-transform: uppercase; margin-bottom: 10px">or</h4>
                                      <p style="margin-bottom: 10px;">If the button above does not work, paste this link into your web browser:</p>
                                      <a href='https://enseedling-internship.onrender.com/user/verify?login_token=${token}' style="color: #6576ff; text-decoration:none;word-break: break-all;">https://internship.back.enseedling.com/user/verify?login_token=${token}</a>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="padding: 20px 30px 40px">
                                      <p>If you did not make this request, please contact us or ignore this message.</p>
                                      <p style="margin: 0; font-size: 13px; line-height: 22px; color:#9ea8bb;">This is an automatically generated email please do not reply to this email. If you face any issues, please contact us at  contact@enseedling.com</p>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table style="width:100%;max-width:620px;margin:0 auto;">
                          <tbody>
                              <tr>
                                  <td style="text-align: center; padding:25px 20px 0;">
                                      <p style="font-size: 13px;">Copyright © 2021 Enseedling. All rights reserved..</p>
                                      <p style="padding-top: 15px; font-size: 12px;">This email was sent to you as a registered user of <a style="color: #6576ff; text-decoration:none;" href="">internship.enseedling.com</a>.</p>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                 </td>
              </tr>
          </table>
      </center>
  </body>
  </html>`;
  return template;
};
module.exports = magicLinkTemplate;
