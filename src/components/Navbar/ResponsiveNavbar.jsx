
  
  const ResponsiveNavbar = () => {

    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }


    return (
      x.style.display
    )
  }
  
  export default ResponsiveNavbar