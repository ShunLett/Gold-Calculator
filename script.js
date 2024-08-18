function calculate() {
    console.log('ABC')

    const weightIngram = document.getElementById('weightIngram').value;
    const weightInpae = weightIngram / 1.0205;
    document.getElementById('weightInpae').textContent = weightInpae.toFixed(2);

    const marketprice = document.getElementById('marketprice').value;
    const actualgoldprice = weightInpae * (marketprice / 16);
    document.getElementById('actualgoldprice').textContent = actualgoldprice.toFixed(0);

    const saleprice = document.getElementById('saleprice').value;
    const servicecharge = saleprice - actualgoldprice;
    document.getElementById('servicecharge').textContent = servicecharge.toFixed(0)
}