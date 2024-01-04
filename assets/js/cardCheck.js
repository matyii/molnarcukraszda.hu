const visa = "assets/img/cart/payment/visa.svg";
const mastercard = "assets/img/cart/payment/mastercard.svg";

document.getElementById('inputCardNumber').addEventListener('input', function() {
    let cardNumber = this.value.replace(/\D/g, '');
    cardNumber = cardNumber.slice(0, 16);

    const cardImageLabel = document.getElementById('cardImageLabel');
    const cardImageLabelClasses = cardImageLabel.classList;

    let cardTypeImage = '';
    let formattedCardNumber = '';

    for (let i = 0; i < cardNumber.length; i++) {
        formattedCardNumber += cardNumber[i];
        if ((i + 1) % 4 === 0 && i < cardNumber.length - 1) {
            formattedCardNumber += ' ';
        }
    }

    if (cardNumber.length >= 1) {
        let cardType = 'Unknown';
        const firstDigit = cardNumber.charAt(0);

        if (firstDigit === '4') {
            cardType = 'Visa';
            cardTypeImage = `<img src="${visa}" style="width: 50px; height: auto;">`;
        } else if (firstDigit === '5') {
            cardType = 'Mastercard';
            cardTypeImage = `<img src="${mastercard}" style="width: 50px; height: auto;">`;
        }

        cardImageLabel.innerHTML = cardTypeImage;
    } else {
        cardImageLabel.innerHTML = '';
    }
    if (this.value !== formattedCardNumber.trim()) {
        this.value = formattedCardNumber.trim();
    }
});

document.getElementById('inputCVV').addEventListener('input', function() {
    let cvv = this.value.replace(/\D/g, '');
    cvv = cvv.slice(0, 3);
    this.value = cvv;
});

document.getElementById('inputExpiration').addEventListener('input', function() {
    let val = this.value.replace(/\D/g, '');

    let month = val.slice(0, 2);
    if (parseInt(month, 10) > 12) {
        month = '12';
    }
    let year = val.slice(2, 4);
    if (val.length > 2) {
        if (parseInt(year, 10) > 99) {
            year = '99';
        }
        val = `${month}/${year}`;
    } else {
        val = month;
    }

    this.value = val;
});