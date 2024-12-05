// this function is used to calculate the BMI
function CalculateBMI() {
    // initialize variables
    let weight = document.getElementById('input-body-weight').value;
    let age = document.getElementById('input-age').value;
    let height = document.getElementById('input-body-height').value/100;
    let bmi;
    let status;
    let conclusion;
    let information;
    
    // validate the input, if valid, then run the calculation process, otherwise display notification alert
    if(weight != '' && age != '' && height != '') {
        // calculate the BMI
        let val = weight/(height * height);
        bmi = (Math.round(val * 10) / 10).toFixed(1); 

        // check the BMI result 
        if(bmi < 18.5) { /*BMI status is "Kekurangan berat badan"*/
            // set the information for category 'Kekurangan berat badan'
            status = "Berat Badan Kurang";
            conclusion = "Anda kekurangan berat badan";
            information = "Anda berada dalam kategori 'Underweight' atau kekurangan berat badan. Anda disarankan untuk menambah berat badan hingga mencapai berat badan ideal. Cara yang dapat Anda lakukan untuk menambah berat badan adalah dengan mengkonsumsi makanan dan minuman yang bergizi (Mencukupi kebutuhan gizi makro dan mikro Anda), serta istirahat yang cukup.";
        } 
        else if(bmi >= 18.5 && bmi <= 24.9) { /*BMI status is "Normal atau Ideal"*/
            // set the information for category 'Ideal'
            status = "Berat Badan Ideal";
            conclusion = "Anda memiliki berat badan yang ideal";
            information = "Selamat, Anda memiliki berat badan 'Ideal'. Jangan lupa untuk tetap menjaga pola hidup sehat Anda dengan cara mengkonsumsi makanan dan minuman yang bergizi (Mencukupi kebutuhan gizi makro dan mikro Anda), berolahraga teratur, serta beristirahat yang cukup.";
        }
        else if(bmi >= 25 && bmi <= 29.9) { /*BMI status is "Kelebihan berat badan"*/
            // set the information for category 'Kelebihan berat badan'
            status = "Berat Badan Lebih";
            conclusion = "Anda memiliki berat badan berlebih";
            information = "Anda berada dalam kategori 'Overweight' atau kekurangan berat badan. Anda disarankan untuk menurunkan berat badan hingga mencapai berat badan ideal. Cara yang dapat Anda lakukan untuk menurunkan berat badan adalah dengan membatasi jumlah kalori yang dikonsumsi, berolahraga secara rutin, serta beristirahat yang cukup.";
        }
        else if(bmi >= 30) { /*BMI status is "Kegemukan atau Obesitas"*/
            // set the information for category 'Obesitas'
            status = "Berat Badan Obesitas";
            conclusion = "Anda memiliki berat badan kegemukan (obesitas)";
            information = "Anda berada dalam kategori 'Obesitas' atau kegemukan. Anda disarankan untuk menurunkan berat badan hingga mencapai berat badan ideal. Cara yang dapat Anda lakukan untuk menurunkan berat badan adalah dengan membatasi jumlah kalori yang dikonsumsi, berolahraga secara rutin, serta beristirahat yang cukup.";
        }

        // Displaying result
        DisplayResult(status, bmi, conclusion, information);
    } else {
        // display notification alert
        alert("Mohon untuk mengisi form secara lengkap");
    }
}

// this function is used to displaying the result section which was hide in the first load
function DisplayResult(status, result, conclusion, information) {
    // display calculation result
    document.getElementById('calculation-status').innerText = status;
    document.getElementById('calculation-result').innerText = result;
    document.getElementById('calculation-conclusion').innerText = conclusion;
    document.getElementById('calculation-information').innerText = information;

    // display result section (right-side section)
    document.getElementById('section-result').style.display = "block";
}

// this function is used to reset BMI input form, BMI calculation result, and hide result section
function ResetBMI() {
    // hide result section (right-side section)
    document.getElementById('section-result').style.display = "none";

    // reset result section
    document.getElementById('calculation-status').innerText = "";
    document.getElementById('calculation-result').innerText = "";
    document.getElementById('calculation-conclusion').innerText = "";
    document.getElementById('calculation-information').innerText = "";

    // reset BMI input form
    document.getElementById('form-kalkulator-bmi').reset();
}