// Fetch the configuration file
fetch("../config.json")
  .then((response) => response.json())
  .then((config) => {
    // Get the WhatsApp URL from the configuration
    const whatsappUrl = config.WHATSAPP;

    // Update the href attribute of the element with ID 'whatsapp'
    const whatsappLink = document.getElementById("whatsapp");

    if (whatsappLink) {
      whatsappLink.href = whatsappUrl;
    }
  })
  .catch((error) => console.error("Error fetching configuration:", error));
