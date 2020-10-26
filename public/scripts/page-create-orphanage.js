const map = L.map('mapid').setView([-27.223381,-49.6445013], 16);

// create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})


let marker;

//create and add marker
map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker)


    //add icon tileLayer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


// Adicionar o campo de fotos
function addPhotoField() {
    //pegar o container de fotos (id)#images
    const container = document.querySelector('#images')
    //pegar o container para duplicar o .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
     //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao container de imagens

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
        //limpar o valor do campo
    if (fieldsContainer.length <= 1){
        span.parentNode.children[0].value= ""
        return
    }
    span.parentNode.remove();
    //deletar o campo
}

function toggleSelect(event) {
    document
      .querySelectorAll(".button-select button")
      .forEach((button) => button.classList.remove("active"));
  
    const button = event.currentTarget;
    button.classList.add("active");
  
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
  }
  

function validate(event){


    //Validar se lat e lng estão preenchidos
    const needsLatAndLng = map.lat;
    if (needsLatAndLng == "") {
        event.preventDefault()
    alert('Selecione um ponto no mapa')
    }
}