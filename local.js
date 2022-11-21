let textarea=document.getElementById('notes').value;

document.getElementById('add').onclick = addNote= async () => {
    // если поле для ввода текста пустое, ничего не делаем
    if (textarea.value === '') {
        return
    }
    

document.getElementById('notetext').innerHTML+ =<p>+${textarea}</p><br>;


}
/*elementBtn.onclick = () => {
    const elementsLi = elementUl.querySelectorAll('li');
    const newLi = document.createElement('li');
    newLi.textContent = elementsLi.length + 1;
    elementUl.append(newLi);
    updateStorage();
  }
  */