document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{
    e.preventDefault()
    addList(e.target.new_task_description.value)
    form.reset()

  })
  // your code here
});

function addList (add) {
  // create <p> tag
  let ptag= document.createElement('p');
  ptag.textContent=`${add} `
  document.querySelector('#tasks').appendChild(ptag)

  let btn=document.createElement('button');
  btn.textContent='x';
  ptag.appendChild(btn);

  btn.addEventListener('click', deleteButton)

}

function deleteButton(e) {
  e.target.parentNode.remove()
}

/*document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{
    e.preventDefault()
    addList(e.target.new_task_description.value)
    form.reset()

  });

  function addList (add) {
    // create <p> tag
    let ptag= document.createElement('p');
    ptag.textContent=`${add} `
    document.querySelector('#tasks').appendChild(ptag)
  
    let btn=document.createElement('button');
    btn.textContent='x';
    ptag.appendChild(btn);
  
    btn.addEventListener('click', deleteButton)
  
  }
  
  function deleteButton(e) {
    e.target.parentNode.remove()
  }
  // your code here

});*/