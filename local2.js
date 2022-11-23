*elementBtn.onclick = () => {
    const elementsLi = elementUl.querySelectorAll('li');
    const newLi = document.createElement('li');
    newLi.textContent = elementsLi.length + 1;
    elementUl.append(newLi);
    updateStorage();
  }
  */
 function setmes() {
  let commentarea = document.getElementById('comment').value;
  let namea = document.getElementById('name').value;
  let commentList = document.getElementById('comment-list');
  commentList.innerHTML+=`<span>${namea}</span><a href="https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-54.jpg"><img src="https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-54.jpg" width="50" 
  height="50" alt="avatar"></a><span>${commentarea}</span><br>` ;
  commentarea.value = '';

  if (localStorage.getItem('name') == null){
    localStorage.setItem ('name', namea);
  }
  if (commentarea.includes("viagra")){
    commentList.innerHTML=`<div>${'***'}</div><br>`;}
    
    if (commentarea.includes("xxx")){
      commentList.innerHTML=`<div>${'***'}</div><br>`;}  

      commentarea.value = '';
  }