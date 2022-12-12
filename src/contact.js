function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  
  const phone = document.createElement("p");
  const address = document.createElement("p");
  phone.textContent = "Phone: 93284012";
  address.textContent =
    "Address: 2 Chome-13-10 Fukagawa, Koto City, Tokyo 135-0033, Japan";

    phone.classList.add("phone");
    address.classList.add("address");
  const map = document.createElement("div");
  map.id = "map";

  contact.appendChild(address);
  contact.appendChild(map);
  contact.appendChild(phone);

  return contact;
}

function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createContact());
  initMap();
}

function initMap() {
  const fuyuki = { lat: 35.67554442048598, lng: 139.7987894564595 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: fuyuki,
  });
  const marker = new google.maps.Marker({
    position: fuyuki,
    map: map,
  });
}

export default loadContact;
