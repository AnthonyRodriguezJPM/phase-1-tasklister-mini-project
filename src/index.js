document.addEventListener("DOMContentLoaded", () => {
  // your code here, look at it as e=form
  const form = document.querySelector('form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const insideForm=e.target.new_task_description.value
    addAndRemoveList(insideForm);
    form.reset()
  });

  
  
  function addAndRemoveList (item) {
    const pTag = document.createElement('li');
    pTag.textContent = `${item} `
    document.querySelector('#tasks').appendChild(pTag)

    const btn=document.createElement('button');
    btn.textContent='X';
    pTag.appendChild(btn);

    btn.addEventListener('click', deleteBtn)


  };

  function deleteBtn (item) {
    item.target.parentNode.remove();
  }




















}); 

