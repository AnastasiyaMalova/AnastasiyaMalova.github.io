const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover')
  placeholder.addEventListener('dragenter')
  placeholder.addEventListener('dragleave')
  placeholder.addEventListener('drop')



}
function dragstart(event) {
  console.log('drag start', event.target)
  setTimeout(())=>event.target.classList.add('hide', 0)
  event.target.classList.add('hide')
}

function dragend(event) {
  event.target.classList.remove('hold')
  event.target.classList.remove('hide')
}