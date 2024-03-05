const page = {

    default: function () {
        const convertButton = document.querySelector("#convertButton");
        convertButton.addEventListener("click", page.convert);
    },

    convert: function () {
        const radioForm = document.getElementsByName("conversion");
        const conversionInput = document.querySelector("#tempInput");
        const htmlOutput = document.getElementById("output");

        if (radioForm[0].checked) {
            let output = ((conversionInput.value - 32) * (5/9));
            htmlOutput.innerHTML = output + "°C"
        }

        else {
            let output = ((conversionInput.value * (9/5)) + 32);
            htmlOutput.innerHTML = output + "°F"
        }

    }
}

window.addEventListener("load", page.default);