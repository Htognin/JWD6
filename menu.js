let itemOrder = [
  {
    dipesan: false,
    harga: 20000,
    nama: "Nasi Goreng",
  },
  {
    dipesan: false,
    harga: 10000,
    nama: "Odeng",
  },
  {
    dipesan: false,
    harga: 30000,
    nama: "ramyeon",
  },
  {
    dipesan: false,
    harga: 60000,
    nama: "Ganjang Genjang",
  },
  {
    dipesan: false,
    harga: 15000,
    nama: "Tteokbokki",
  },
];

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName('item');

const textTotal = document.getElementById('last-item')

for(let i = 0; i < itemTerpilih.length;i++){
    itemTerpilih[i].addEventListener('click', function(){
        setItemPemesanan(i,itemTerpilih[i])
    })
}

function setItemPemesanan(index,elemen) {
if(itemOrder[index].dipesan == false){
    itemOrder[index].dipesan = true;
    elemen.style.backgroundColor = "#ffb3c6";
    elemen.style.color = "white";
    totalOrder = totalOrder + itemOrder[index].harga;
}else{
    itemOrder[index].dipesan = false;
    elemen.style.backgroundColor = "#bbd0ff";
    elemen.style.color = "black";
    totalOrder = totalOrder - itemOrder[index].harga;
}

textTotal.innerHTML = 'Total : <span> Rp' + totalOrder +'</span>'
}