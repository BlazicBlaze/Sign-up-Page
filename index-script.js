function getValues()
  {
    let nm = document.getElementById('usernameField').value;
    let email = document.getElementById('emailField').value;
    let pass = document.getElementById('passwordField').value;
    
    if(nm === "" || email === "" || pass === "")
      alert("You cannot leave a field empty");
    document.getElementById("submitButton").innerHTML = "Test";
  }