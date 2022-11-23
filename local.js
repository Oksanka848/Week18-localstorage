

document.getElementById('add').onclick = addNote= async () => {
    let textarea=document.getElementById('notes').value;
    let notetext=document.getElementById('notetext');
    // если поле для ввода текста пустое, ничего не делаем
    if (textarea.value === '') {
        return
    }
    if (localStorage.getItem('notetext') == null){
        localStorage.setItem ('notetext', notetext);
      }

    notetext.innerHTML+=`<p><img src="https://img.icons8.com/windows/32/null/double-tick.png" alt="doubletick"/> ${textarea}</p><br>`;
    textarea.value='';

}