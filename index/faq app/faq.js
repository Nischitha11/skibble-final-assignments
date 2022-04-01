
var btnArray = document.getElementsByClassName("expand");

      for (let index = 0; index < btnArray.length; index++) {
        const element = btnArray[index];
        element.addEventListener("click", function () {
          var pElement = this.parentNode.parentNode.parentNode.childNodes[3];
          console.log(this.parentNode)
          var visibility = pElement.style.display;
          if (visibility == "none" || !visibility) {
            pElement.style.display = "block";
            this.innerHTML = "-";
          } else if (visibility == "block") {
            pElement.style.display = "none";
            this.innerHTML = "+";
          }
        });
      }

