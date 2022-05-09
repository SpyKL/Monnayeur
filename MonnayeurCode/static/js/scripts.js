const pieces = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
let isItemSelected = false
let iscolored = false
let tabPieces = []
let aRendre = []
let aPayer = 0
let itemPrice
let rendu = 0
let sum = 0

function add(id) {
    if (isItemSelected == false) {
        alert("Veuillez d'abord choisir un produit.")
    } else {
        tabPieces.push(id)
        sum = 0
        for(let i= 0; i < tabPieces.length; i++)
        {
            sum += tabPieces[i];
        }
        choice('yes')
        return sum
    }
}

function payer() {
    if (isItemSelected == false) {
        alert("Veuillez d'abord choisir un produit.")
    } else if(aPayer > 0) {
        alert('Vous devez encore payer ' + aPayer + ' €.')
    } else {
        sum *= 10000
        sum = Math.round(sum)
        sum /= 10000
        alert('Vous avez payé ' + sum + ' € avec les pièces suivantes : ' + tabPieces);
        piecesRendu()
    }
}

function itemSelected(item, id) {
    iscolored = true
    document.getElementById(id).style.backgroundColor = '#00478a';
    document.getElementById('screenTextTitle').textContent = '==== ' + item.toUpperCase() + ' ===='
    if(item=='café') {
        itemPrice = 1
    } else if(item=='thé') {
        itemPrice = 1.5
    } else if(item=='jus de pomme') {
        itemPrice = 2
    } else {
        itemPrice = 2.5
    }
    document.getElementById('screenText1').textContent = 'Un ' + item + ' coûte ' + itemPrice + ' €'
    document.getElementById('screenText2').textContent = 'Confirmez-vous votre choix ?'
    document.getElementById('screenYes').textContent = '[ Oui ]'
    document.getElementById('screenNo').textContent = '[ Non ]'
    return itemPrice, iscolored
}

function choice(response) {
    if(response=='yes') {
        isItemSelected = true
        aPayer = (itemPrice-sum)
        aPayer *= 10000
        aPayer = Math.round(aPayer)
        aPayer /= 10000
        document.getElementById('screenText1').textContent = 'A payer : ' + aPayer + ' €'
        if(aPayer < 0) {
            rendu = -aPayer
            document.getElementById('screenText1').textContent = 'A payer : 0 €'
        }
        document.getElementById('screenText2').textContent = 'Rendu : ' + rendu + ' €'
        document.getElementById('screenYes').textContent = ''
        document.getElementById('screenNo').textContent = ''
        return aPayer
    } else {
        document.getElementById('screenTextTitle').textContent = 'Veuillez choisir votre produit.'
        document.getElementById('screenText1').textContent = ''
        document.getElementById('screenText2').textContent = ''
        document.getElementById('screenYes').textContent = ''
        document.getElementById('screenNo').textContent = ''
    }
}

function mouseOver(id) {
    document.getElementById(id).style.backgroundColor = '#007ff7';
    iscolored = false
}
function mouseOut(id) {
    if(iscolored == false) {
        document.getElementById(id).style.backgroundColor = '';
    }
}

function piecesRendu() {
    for(let i = 0; i < pieces.length; i++)
        {
            while(pieces[i] <= rendu) {
                rendu -= pieces[i]
                aRendre.push(pieces[i])
            }
        }
    alert('Le monnayeur vous rend : ' + aRendre)
}
