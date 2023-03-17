window.addEventListener('load', 
function (e) {
  var d = new Date();
  var days = d.getDate(); if (days<10) days='0'+days;
  var month = d.getMonth() + 1; if (month<10) month='0'+month;
  var year = d.getFullYear(); 
  document.getElementById("day").value = year+"-"+month+"-"+days;
}, false);


let btnForm = document.querySelector("#comments-form button");
let countComments = 0;
let idComment = 0;


input.onblur = function() {
  if (input.value.length < 2) {
    input.classList.add('invalid');
    error.innerHTML = 'Длина имени должна быть больше двух символов.'
  }
};

input.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};

text.onblur = function() {
  if (text.value.length < 10) { // не email
    text.classList.add('invalid');
    error.innerHTML = 'Длина сообщения не менее 10 символов'
  }
};

text.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};

btnForm.onclick = function() {
  idComment++;

  let form = document.querySelector("#comments-form");
  if(form.name.value.length < 2) {
    return false;
  } else if(form.comment.value.length < 10) {
    return false;
  }

  if(countComments == 0)
    document.querySelector("#comments").innerHTML = "";

  countComments++;
  document.querySelector(".count-comm").innerHTML = countComments;


  var d = new Date(); // сегодня
  var days = d.getDate(); if (days<10) days='0'+days;
  var month = d.getMonth() + 1; if (month<10) month='0'+month;
  var year = d.getFullYear(); 
  currentDate = year+"-"+month+"-"+days;
  Hour = d.getHours(); if (Hour<10) Hour='0'+Hour;
  Minutes = d.getMinutes(); if (Minutes<10) Minutes='0'+Minutes;
  Seconds = d.getSeconds(); if (Seconds<10) Seconds='0'+Seconds;
  currentTime = Hour + ":" + Minutes + ":" + Seconds;

  d.setDate(d.getDate() - 1); //вчера
  var days = d.getDate(); if (days<10) days='0'+days;
  var month = d.getMonth() + 1; if (month<10) month='0'+month;
  var year = d.getFullYear(); 
  dayYesterday = year+"-"+month+"-"+days;

  if (form.day.value == currentDate) {
    let newComment = "<div class='comment' id='block-" + idComment + "'>" +
    "<span class='delete' onclick='delComm(" + idComment + ")'></span>" +
    "<p class='name'>" + form.name.value.toUpperCase() + "</p>" +
    "<p class='day'>" + "<i>" + "Сегодня в " + currentTime +"</i>" + "</p>" +
    "<p class='mess'>" + form.comment.value + "</p>" +
    "<div class='like' onclick='changeClassName(this)'></div>" +
    "</div>";

  document.querySelector("#comments").insertAdjacentHTML('afterbegin', newComment);

  form.comment.value = "";
  form.name.value = "";
  

  } else if (form.day.value == dayYesterday){
    let newComment = "<div class='comment' id='block-" + idComment + "'>" +
    "<span class='delete' onclick='delComm(" + idComment + ")'></span>" +
    "<p class='name'>" + form.name.value.toUpperCase() + "</p>" +
    "<p class='day'>" + "<i>" + "Вчера в " + currentTime + "</i>" + "</p>" +
    "<p class='mess'>" + form.comment.value + "</p>" +
    "<div class='like' onclick='changeClassName(this)'></div>" +
    "</div>";

  document.querySelector("#comments").insertAdjacentHTML('afterbegin', newComment);

  form.comment.value = "";
  form.name.value = "";
  form.day.value = currentDate;
  } else {
    let newComment = "<div class='comment' id='block-" + idComment + "'>" +
    "<span class='delete' onclick='delComm(" + idComment + ")'></span>" +
    "<p class='name'>" + form.name.value.toUpperCase() + "</p>" +
    "<p class='day'>" + "<i>" + form.day.value + " в " + currentTime +"</i>" + "</p>" +
    "<p class='mess'>" + form.comment.value + "</p>" +
    "<div class='like' onclick='changeClassName(this)'></div>" +
    "</div>";

  document.querySelector("#comments").insertAdjacentHTML('afterbegin', newComment);

  form.comment.value = "";
  form.name.value = "";
  form.day.value = currentDate;
  }
};
  
function changeClassName(x) {
  x.classList.toggle("like-new");
}

function delComm(id) {
  document.querySelector("#block-" + id).remove();

  countComments--;
  document.querySelector(".count-comm").innerHTML = countComments;

  if(countComments == 0)
    document.querySelector("#comments").innerHTML = "Пока комментариев нет";
}  