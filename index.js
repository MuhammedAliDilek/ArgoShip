const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  console.log(firstname.value);
  console.log(lastname.value);

  if (firstname.value === "muhammet") {
    alert("you are already in Boss!");
    firstname.disabled = true;
    lastname.disabled = true;
  } else {
    console.log("login success");
  }
});
