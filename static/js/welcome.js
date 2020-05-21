function saveNickname(){
    const name = document.querySelector('#nickname').value;
    localStorage.setItem('nickname', name);
}