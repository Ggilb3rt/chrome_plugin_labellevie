function getQuantity(text) {
	const start = text.search(/\([0-9a-zA-Z ,.]{1,}\)/gm);
	const sub = text.substring((start+1));
	return sub.substring(0, sub.length - 1);
}

function findWeight(qt) {
	if (qt.includes("kg") || qt.includes("KG") || qt.includes("L"))
		return 1.0;
	else if (qt.includes("cl") || qt.includes("CL"))
		return 100.0
	else
		return 1000.0
}

function crossProduct(qt, price, weight) {	
	return Math.fround(weight * parseFloat(price) / parseFloat(qt)).toFixed(2);
}

function calculateKilo(qt, price) {
	const weight = findWeight(qt);
	qt = qt.replace(',', '.');
	return crossProduct(qt, price, weight);
}

function calculateKiloMultiple(qt, price) {
	let		splitted = qt.split(/,(.+)/);
	if (!splitted[1])
		return Math.fround(parseFloat(price) / parseFloat(splitted[0].substring(1))).toFixed(2);
	const	weigth = findWeight(splitted[1]);
	splitted[1] = splitted[1].replace(',', '.');
	// const realQt = parseFloat(splitted[0].substring(1)) * parseFloat(splitted[1]);

	return crossProduct(splitted[1], price, weigth);
}


let prices = document.querySelectorAll(".price");
let descriptions = document.querySelectorAll(".description h1");

for(let i = 0; i < prices.length; i++)
{
	const	qt = getQuantity(descriptions[i].innerHTML);
	let		kilo = calculateKilo(qt, prices[i].innerText);
	if (isNaN(kilo))
		kilo = calculateKiloMultiple(qt, prices[i].innerText);
	// console.log(qt + " | " + prices[i].innerText);
	prices[i].innerHTML = prices[i].innerHTML + " | " + kilo + "€/kg";
}
