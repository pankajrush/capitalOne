function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;
  
    if (username === "" || password === "" || !rememberMe) {
      alert("Please fill in all fields and check Remember Me.");
      return false;
    }
  
    window.location.href = "/sign-in/sign-in.html";
    return false;
  }
  