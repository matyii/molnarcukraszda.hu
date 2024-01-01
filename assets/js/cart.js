document.addEventListener('DOMContentLoaded', function() {
    const summaryCard = document.getElementById('summaryCard');

    function updateSummary() {
        const selectedShipping = document.querySelector('input[name="flexRadioDefault"]:checked');
        const selectedShippingValue = selectedShipping ? selectedShipping.value : 'Nincs kiválasztva';
        const fullName = document.getElementById('inputName').value.trim();
        const address = document.getElementById('inputAddress').value.trim();
        const city = document.getElementById('inputCity').value.trim();
        const zipCode = document.getElementById('inputZip').value.trim();
        const country = document.getElementById('inputCountry').value;

        const summaryContent = `
            <h3 class="card-title">Összegzés</h3>
            <p><strong>Szállítás:</strong> ${selectedShippingValue}</p>
            <p><strong>Teljes név:</strong> ${fullName || 'Nincs megadva'}</p>
            <p><strong>Cím:</strong> ${address || 'Nincs megadva'}</p>
            <p><strong>Város:</strong> ${city || 'Nincs megadva'}</p>
            <p><strong>Irányítószám:</strong> ${zipCode || 'Nincs megadva'}</p>
            <p><strong>Ország:</strong> ${country || 'Nincs megadva'}</p>
        `;
        summaryCard.innerHTML = summaryContent;
    }

    const formInputs = document.querySelectorAll('#inputName, #inputAddress, #inputCity, #inputZip, #inputCountry, input[name="flexRadioDefault"]');
    formInputs.forEach(input => {
        input.addEventListener('input', updateSummary);
    });
    updateSummary();
});
