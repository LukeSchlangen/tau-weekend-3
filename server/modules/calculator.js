var calculateMe = function(req, res){
  console.log('in the post route');
  console.log('req.body in the post = ', req.body);

  var operator = req.body.operator;
  var x = Number(req.body.x);
  var y = Number(req.body.y);

  // Addition
  switch(operator) {
    case 'add':
      res.send({ answer: x + y });
      break;
    case 'subtract':
      res.send({ answer: x - y });
      break;
    case 'multiply':
      res.send({ answer: x * y });
      break;
    case 'divide':
      res.send({ answer: x / y });
      break;
    default:
      console.log('nice post... but no... it broke');
      res.sendStatus(400);
  }

  // Subtraction

  // Multiplication

  // Division
}


module.exports = calculateMe;
