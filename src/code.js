//Neste projeto irei criar uma galeria de videos que recebe o id de um video e o guarda no localStorage
//Primeiro crie um layout bonito e depois foque no form que usaremos
const body = document.querySelector('body')

const title = document.createElement('div')
title.textContent = 'My videos Gallery'
title.setAttribute('id', 'title')

const form = document.createElement('form')
form.action = '#'

const videoIDLabel = document.createElement('label')
videoIDLabel.textContent = 'Videos ID'

const videoID = document.createElement('input')
videoID.required = true

const SaveButton = document.createElement('button')
SaveButton.textContent = 'Save the video'
SaveButton.type = 'submit'

const videosSpace = document.createElement('ul')
videosSpace.setAttribute('id', 'videosSpace')

//popup é uma div que aparecerá quando uma thumbmail for clicada ocupado todo o site e dentro dela haverá o iframe com o video correspondente a thumbmail clicada
const popup = document.createElement('div')
popup.classList.add('closed')
popup.setAttribute('id','popup')
let frame = document.createElement('iframe')
frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
frame.allowFullscreen = true

popup.append(frame)
//Para poder usar a URL de um video do youtube é necessário remover a parte watch?v= e no lugar colocar embed/



//Para guardar algo que não seja uma string no localStorage é necessário primeiro tornar esse elemento em uma string usando JSON.stringify() e depois quando usamos localStorage.get() para usar o elemento salvo usaremos no localStorage.get() JSON.parse() para retornar o elemento ao seu estado original


//Dentro da array youtubeVideoIds ficaram os ids dos videos 
let youtubeVideoIds = []

//A função loadVideos() serve carregar os videos guardados no localStorage, caso não haja nenhum video o valor da array fica como vazia
const loadVideos = ()=>{
  youtubeVideoIds = JSON.parse(localStorage.getItem('youtubeVideoIds')) || []

}

//A função displayVideos() server para mostrar as thumbnails
const displayVideos = () => {
  //A variavel videosStr recebe como valor os elementos da array youtubeVideoIds transformados em li que possuem dentro de si a thumbnail e o botão de deletar
  const videosStr = youtubeVideoIds
    .map(
      (id) => `
      <li onclick="clickVideo(event, '${id}')">
        <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" alt="Cover image for YouTube video with id ${id}">
        <button class="delete-btn" >&times;</button>
      </li>
    `
    )
    .join('');
  videosSpace.innerHTML = videosStr;
};

//A função clickVideo() é acionada quando clicamos na li, se o que clicamos for o botão de deletar filtraremos a array removendo todos os elementos que não forem igual ao id em outras palavras remova o li que possui o botão de delete que foi clicado, depois de remover o li mande para o localStore a array sem o li deletado e por fim mostre os videos usando displayVideos()
//Caso clicamos na thumbnail adicionaremos ao iframe a url que corresponte a thumbnail clicada e mostramos a div popup criando um efeito interessante
const clickVideo = (event, id)=>{
  if(event.target.classList.contains('delete-btn')){
    youtubeVideoIds = youtubeVideoIds.filter(i =>i !== id)
    localStorage.setItem('youtubeVideoIds', JSON.stringify(youtubeVideoIds))
    displayVideos()
  }
  else {
    frame.src = `https://www.youtube.com/embed/${id}`
    popup.classList.add('open')
    popup.classList.remove('closed')
  }
}


//Quando o SaveButton for clicado ele adionará a primeira posição da array youtubeVideoIds o id colocado no inputvideoID e também adicionará ao localStorage a array youtubeVideoIds 

 SaveButton.addEventListener('click', (e)=>{
  e.preventDefault()
  youtubeVideoIds.unshift(videoID.value)
  videoID.value = ""
  localStorage.setItem('youtubeVideoIds',JSON.stringify(youtubeVideoIds))

  //Chame a função displayVideos() para mostrar o novo video adicionado
  displayVideos()
 })

 //Ao clicar em uma thumbnail a div popup aparecerá e nela heverá o iframe com o video da thumbnail caso cliquemos forá do video popup sumirá
 popup.addEventListener('click', ()=>{
  popup.classList.add('closed')
  popup.classList.remove('open')

 })
loadVideos()
displayVideos()

document.addEventListener( 'visibilitychange', ()=>{ 
  if(document.visibilityState != "visible"){
    popup.classList.add('closed')
  }
}
)

videoIDLabel.append(videoID)
form.append(title,videoIDLabel,SaveButton)
body.append(form,videosSpace,popup)


