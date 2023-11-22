var getName = document.getElementById("name");
var getEmail = document.getElementById("email");
var getPhone = document.getElementById("phone");
var getService = document.getElementById("service");
var getMessage = document.getElementById("message");

function sendMail() {
  if (getName.value !== "" && getEmail.value !== "" && getPhone.value !== "" && getService.value !== "" && getMessage.value !== "") {

    var params = {
      name: getName.value,
      email: getEmail.value,
      phone: getPhone.value,
      service: getService.value,
      message: getMessage.value
    };

    const serviceID = "service_s6pn1g6";
    const templateID = "template_xcvumvh";

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        getName.value = "";
        getEmail.value = "";
        getPhone.value = "";
        getService.value = "";
        getMessage.value = "";
        console.log(res);
        // alert("Your message sent successfully!!")
        Swal.fire({
          title: "Done!",
          text: "Your message sent successfully!",
          icon: "success"
        });

      })
      .catch(err => {
        console.log(err)
        alert("Your message not sent!!")
    
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong, your message not sent!"
        
        });
      })

  }


}

