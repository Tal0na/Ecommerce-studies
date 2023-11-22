function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      var bmi = (weight / (height * height)).toFixed(2);
      document.getElementById('result').innerHTML = 'Seu IMC é: ' + bmi;
    } else {
      document.getElementById('result').innerHTML = 'Por favor, insira peso e altura válidos.';
    }
  }