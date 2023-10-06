/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
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

//Para poder user o URL de um video do youtube é necessário remover a parte watch?v= e no lugar colocar embed/

//Colocar iframes de videos no videosSpace ao apertar o botão
//Os videos devem ficar em divs para que possam ser deletados
//Os videos devem ser salvos localmente
//O usuario deve ser capaz de remover videos
// const deleteButton = document.createElement('button')
// deleteButton.classList.add('deleteButton')

// SaveButton.addEventListener('click',(e)=>{
//     e.preventDefault()

//     let videoDiv = document.createElement('div')
//     videoDiv.classList.add('videoDiv')

//     let frame = document.createElement('iframe')
//     frame.src = `https://www.youtube.com/embed/${videoID.value}`
//     const deleteButton = document.createElement('button')
//     deleteButton.classList.add('deleteButton')

//     videoDiv.append(deleteButton,frame)
//     videosSpace.append(videoDiv)
    
//     deleteButton.addEventListener('click', ()=>{
//     videosSpace.removeChild(deleteButton.parentElement)

//     localStorage.setItem('videoDiv', JSON.stringify(videoDiv))
//     let infor = document.createTextNode(localStorage.getItem('videoDiv'))
//     videosSpace.append(infor)

//     localStorage.getItem('videoDIV')

//   })
// })

//Para guardar algo que não seja uma string no localStorage é necessário primeiro tornar esse elemento em uma string usando JSON.stringify() e depois quando usamos localStorage.get() para usar o elemento salvo usemos no localStorage.get() JSON.parse() para retornar o elemento ao seu estado original



let youtubeVideoIds = []


const loadVideos = ()=>{
  youtubeVideoIds = JSON.parse(localStorage.getItem('youtubeVideoIds')) || []

}

const displayVideos = () => {
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

const clickVideo = (event, id)=>{
  if(event.target.classList.contains('delete-btn')){
    youtubeVideoIds = youtubeVideoIds.filter(i =>i !== id)
    localStorage.setItem('youtubeVideoIds', JSON.stringify(youtubeVideoIds))
    displayVideos()
  }
  else {

  }
}



 SaveButton.addEventListener('click', (e)=>{
  e.preventDefault()
  youtubeVideoIds.unshift(videoID.value)
  videoID.value = ""
  localStorage.setItem('youtubeVideoIds',JSON.stringify(youtubeVideoIds))

  displayVideos()
 })

loadVideos()
displayVideos()



videoIDLabel.append(videoID)
form.append(title,videoIDLabel,SaveButton)
body.append(form,videosSpace)



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEdBQUc7QUFDM0MsOERBQThELEdBQUcsNkRBQTZELEdBQUc7QUFDakksMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlkZW8tZ2FsbGVyeS8uL3NyYy9jb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vTmVzdGUgcHJvamV0byBpcmVpIGNyaWFyIHVtYSBnYWxlcmlhIGRlIHZpZGVvcyBxdWUgcmVjZWJlIG8gaWQgZGUgdW0gdmlkZW8gZSBvIGd1YXJkYSBubyBsb2NhbFN0b3JhZ2VcclxuLy9QcmltZWlybyBjcmllIHVtIGxheW91dCBib25pdG8gZSBkZXBvaXMgZm9xdWUgbm8gZm9ybSBxdWUgdXNhcmVtb3NcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50aXRsZS50ZXh0Q29udGVudCA9ICdNeSB2aWRlb3MgR2FsbGVyeSdcclxudGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpXHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbmZvcm0uYWN0aW9uID0gJyMnXHJcblxyXG5jb25zdCB2aWRlb0lETGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbnZpZGVvSURMYWJlbC50ZXh0Q29udGVudCA9ICdWaWRlb3MgSUQnXHJcblxyXG5jb25zdCB2aWRlb0lEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG52aWRlb0lELnJlcXVpcmVkID0gdHJ1ZVxyXG5cclxuY29uc3QgU2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblNhdmVCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSB0aGUgdmlkZW8nXHJcblNhdmVCdXR0b24udHlwZSA9ICdzdWJtaXQnXHJcblxyXG5jb25zdCB2aWRlb3NTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxudmlkZW9zU3BhY2Uuc2V0QXR0cmlidXRlKCdpZCcsICd2aWRlb3NTcGFjZScpXHJcblxyXG4vL1BhcmEgcG9kZXIgdXNlciBvIFVSTCBkZSB1bSB2aWRlbyBkbyB5b3V0dWJlIMOpIG5lY2Vzc8OhcmlvIHJlbW92ZXIgYSBwYXJ0ZSB3YXRjaD92PSBlIG5vIGx1Z2FyIGNvbG9jYXIgZW1iZWQvXHJcblxyXG4vL0NvbG9jYXIgaWZyYW1lcyBkZSB2aWRlb3Mgbm8gdmlkZW9zU3BhY2UgYW8gYXBlcnRhciBvIGJvdMOjb1xyXG4vL09zIHZpZGVvcyBkZXZlbSBmaWNhciBlbSBkaXZzIHBhcmEgcXVlIHBvc3NhbSBzZXIgZGVsZXRhZG9zXHJcbi8vT3MgdmlkZW9zIGRldmVtIHNlciBzYWx2b3MgbG9jYWxtZW50ZVxyXG4vL08gdXN1YXJpbyBkZXZlIHNlciBjYXBheiBkZSByZW1vdmVyIHZpZGVvc1xyXG4vLyBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4vLyBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnV0dG9uJylcclxuXHJcbi8vIFNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4vLyAgICAgbGV0IHZpZGVvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuLy8gICAgIHZpZGVvRGl2LmNsYXNzTGlzdC5hZGQoJ3ZpZGVvRGl2JylcclxuXHJcbi8vICAgICBsZXQgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKVxyXG4vLyAgICAgZnJhbWUuc3JjID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JRC52YWx1ZX1gXHJcbi8vICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4vLyAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUJ1dHRvbicpXHJcblxyXG4vLyAgICAgdmlkZW9EaXYuYXBwZW5kKGRlbGV0ZUJ1dHRvbixmcmFtZSlcclxuLy8gICAgIHZpZGVvc1NwYWNlLmFwcGVuZCh2aWRlb0RpdilcclxuICAgIFxyXG4vLyAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuLy8gICAgIHZpZGVvc1NwYWNlLnJlbW92ZUNoaWxkKGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50KVxyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2aWRlb0RpdicsIEpTT04uc3RyaW5naWZ5KHZpZGVvRGl2KSlcclxuLy8gICAgIGxldCBpbmZvciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2aWRlb0RpdicpKVxyXG4vLyAgICAgdmlkZW9zU3BhY2UuYXBwZW5kKGluZm9yKVxyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2aWRlb0RJVicpXHJcblxyXG4vLyAgIH0pXHJcbi8vIH0pXHJcblxyXG4vL1BhcmEgZ3VhcmRhciBhbGdvIHF1ZSBuw6NvIHNlamEgdW1hIHN0cmluZyBubyBsb2NhbFN0b3JhZ2Ugw6kgbmVjZXNzw6FyaW8gcHJpbWVpcm8gdG9ybmFyIGVzc2UgZWxlbWVudG8gZW0gdW1hIHN0cmluZyB1c2FuZG8gSlNPTi5zdHJpbmdpZnkoKSBlIGRlcG9pcyBxdWFuZG8gdXNhbW9zIGxvY2FsU3RvcmFnZS5nZXQoKSBwYXJhIHVzYXIgbyBlbGVtZW50byBzYWx2byB1c2Vtb3Mgbm8gbG9jYWxTdG9yYWdlLmdldCgpIEpTT04ucGFyc2UoKSBwYXJhIHJldG9ybmFyIG8gZWxlbWVudG8gYW8gc2V1IGVzdGFkbyBvcmlnaW5hbFxyXG5cclxuXHJcblxyXG5sZXQgeW91dHViZVZpZGVvSWRzID0gW11cclxuXHJcblxyXG5jb25zdCBsb2FkVmlkZW9zID0gKCk9PntcclxuICB5b3V0dWJlVmlkZW9JZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd5b3V0dWJlVmlkZW9JZHMnKSkgfHwgW11cclxuXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlWaWRlb3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgdmlkZW9zU3RyID0geW91dHViZVZpZGVvSWRzXHJcbiAgICAubWFwKFxyXG4gICAgICAoaWQpID0+IGBcclxuICAgICAgPGxpIG9uY2xpY2s9XCJjbGlja1ZpZGVvKGV2ZW50LCAnJHtpZH0nKVwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWxcIiBzcmM9XCJodHRwczovL2kzLnl0aW1nLmNvbS92aS8ke2lkfS9zZGRlZmF1bHQuanBnXCIgYWx0PVwiQ292ZXIgaW1hZ2UgZm9yIFlvdVR1YmUgdmlkZW8gd2l0aCBpZCAke2lkfVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnRuXCIgPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIGBcclxuICAgIClcclxuICAgIC5qb2luKCcnKTtcclxuICB2aWRlb3NTcGFjZS5pbm5lckhUTUwgPSB2aWRlb3NTdHI7XHJcbn07XHJcblxyXG5jb25zdCBjbGlja1ZpZGVvID0gKGV2ZW50LCBpZCk9PntcclxuICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtYnRuJykpe1xyXG4gICAgeW91dHViZVZpZGVvSWRzID0geW91dHViZVZpZGVvSWRzLmZpbHRlcihpID0+aSAhPT0gaWQpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgneW91dHViZVZpZGVvSWRzJywgSlNPTi5zdHJpbmdpZnkoeW91dHViZVZpZGVvSWRzKSlcclxuICAgIGRpc3BsYXlWaWRlb3MoKVxyXG4gIH1cclxuICBlbHNlIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiBTYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgeW91dHViZVZpZGVvSWRzLnVuc2hpZnQodmlkZW9JRC52YWx1ZSlcclxuICB2aWRlb0lELnZhbHVlID0gXCJcIlxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd5b3V0dWJlVmlkZW9JZHMnLEpTT04uc3RyaW5naWZ5KHlvdXR1YmVWaWRlb0lkcykpXHJcblxyXG4gIGRpc3BsYXlWaWRlb3MoKVxyXG4gfSlcclxuXHJcbmxvYWRWaWRlb3MoKVxyXG5kaXNwbGF5VmlkZW9zKClcclxuXHJcblxyXG5cclxudmlkZW9JRExhYmVsLmFwcGVuZCh2aWRlb0lEKVxyXG5mb3JtLmFwcGVuZCh0aXRsZSx2aWRlb0lETGFiZWwsU2F2ZUJ1dHRvbilcclxuYm9keS5hcHBlbmQoZm9ybSx2aWRlb3NTcGFjZSlcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=