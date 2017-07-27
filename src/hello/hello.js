var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

context.font = '38pt Arial';
context.fillStyle = 'cornflowerbule';
context.strokeStyle='blue';

context.fillText('Hello canvas', canvas.width/2 - 150, canvas.height/2 + 15);
context.strokeText('Hello canvas', canvas.width/2 - 150, canvas.height/2 + 15);

