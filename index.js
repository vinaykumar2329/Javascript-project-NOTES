const createBtn = document.querySelector('button')
const textarea = document.querySelector('#textarea')



createBtn.addEventListener('click', function () {

  const text = document.createElement('textarea')
  const deletebtn = document.createElement('i')
  deletebtn.innerHTML = `<i id='delete' class="ri-delete-bin-5-line"></i>`
  text.appendChild(deletebtn)
  textarea.appendChild(text)
  textarea.appendChild(deletebtn)

  deletebtn.addEventListener('click', function () {
    textarea.innerHTML = ""
  })

})

