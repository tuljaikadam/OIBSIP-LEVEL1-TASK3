$("#convert").on("click", function (evt) {
    var temperature = $("#temp").val().trim();
    var temperatureType = $("input[name=temptype]:checked").val();
    var result = '';
    if (is_int(temperature)) {
        temperature = parseFloat(temperature);
      if (temperatureType === "C") {
          temperatureF = (temperature * 9) / 5 + 32;
          temperatureK = temperature+273.15;
          result = 'The temperature in Farenheit is ' + temperatureF + ' °F and the temperature in Kelvin is '+ temperatureK + ' K';
      } else if (temperatureType === "F") {
          temperatureC = (temperature - 32) * 5/9;
          temperatureK = ((temperature-32)/1.8)+273.15
          result = 'The temperature in Celsius is ' + temperatureC + ' °C  and the temperature in Kelvin is '+ temperatureK + ' K';
      }
      else if (temperatureType === "K") {
          temperatureC = temperature-273.15;
          temperatureF = ((temperature-273.15)*1.8)+32
          result = 'The temperature in Celsius is ' + temperatureC + ' °C The temperature in Farenheit is ' + temperatureF + ' °F';
      }
  
      $(".result").html(
        "<div class='alert alert-success alert-dismissible'><button type='button' class='btn-close' data-bs-dismiss='alert'></button><strong>Success!</strong> "+result+"</div>"
      );
    } else {
      $(".result").html(
        "<div class='alert alert-danger alert-dismissible'><button type='button' class='btn-close' data-bs-dismiss='alert'></button><strong>Error!</strong> Please enter a numerical value</div>"
      );
    }
  });
  
  
  function is_int(value) {
    if (parseFloat(value) % 1 === 0) {
      return true;
    } else {
      return false;
    }
  }