function validateform() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    if (name === "" || phone === "") {
      alert("Please fill in all fields and check Remember Me.");
      return false;
    }
  
    window.location.href = "./important.html";
    return false;
  }
  
