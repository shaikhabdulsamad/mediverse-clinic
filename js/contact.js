function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      service: document.getElementById("service").value,
      message: document.getElementById("message").value
    };
  
    const serviceID = "service_s6pn1g6";
    const templateID = "template_xcvumvh";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("service").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>{
        console.log(err)
        alert("Your message not sent!!")
      })
  
  }



//   function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       phone: document.getElementById("phone").value,
//       service: document.getElementById("service").value,
//       message: document.getElementById("message").value
//     };
  
//     const serviceID = "service_s6pn1g6";
//     const templateID = "template_xcvumvh";
  
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("phone").value,
//           document.getElementById("service").value,
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!")
  
//       })
//       .catch(err=>{
//         console.log(err)
//         alert("Your message not sent!!")
//       })
  
//   }