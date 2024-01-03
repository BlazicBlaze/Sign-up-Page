function getValues()
  {
    let nm = document.getElementById('usernameField').value;
    let email = document.getElementById('emailField').value;
    let pass = document.getElementById('passwordField').value;
    
    if(nm === "" || email === "" || pass === "")
      alert("You cannot leave a field empty");
    else
      changeSubmitToAnchor();
  }
  
  function changeSubmitToAnchor()
  {
    document.getElementById("submitButton").innerHTML = '<a href = "profile-page.html" id = "profilePageAnchor">Go to Profile</a>';
  }