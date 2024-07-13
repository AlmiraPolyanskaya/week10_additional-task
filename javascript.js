function calculateTotalPrice(quantity = 2, price = 15000000) {
    let totalPrice = quantity * price;
    alert(`Стоимость покупки: ${totalPrice.toLocaleString('ru-RU')} рублей`);
}


function messageCost(quantity = 2, price = 15000000) {
    let totalPrice = quantity * price;
    document.getElementById('total-price_text').textContent = `Стоимость покупки: ${totalPrice.toLocaleString('ru-RU')} рублей`;
}
