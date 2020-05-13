$('#addButton').on('click',function(){
 
  let task = $('#addList').val();
  let  
  $('#theList').append(`<li>${task}</li>`);
  localStorage.setItem(``,`${task}`);
});
 