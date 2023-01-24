const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  let mailOptions = {
    from: '"Your Name" <your_email@example.com>',
    to: "receiver_email@example.com",
    subject: "Novo e-mail de contato",
    text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("E-mail enviado: " + info.response);
    }
  });
});
