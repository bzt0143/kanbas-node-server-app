export default function QueryParameters(app) {
	// Query string-based operations
	app.get("/lab5/calculator", (req, res) => {
	  const { a, b, operation } = req.query;
  
	  const numA = parseFloat(a);
	  const numB = parseFloat(b);
  
	  let result;
  
	  if (isNaN(numA) || isNaN(numB)) {
		result = "Invalid input: Parameters a and b must be numbers.";
	  } else {
		switch (operation) {
		  case "add":
			result = numA + numB;
			break;
		  case "subtract":
			result = numA - numB;
			break;
		  case "multiply":
			result = numA * numB;
			break;
		  case "divide":
			result = numB !== 0 ? numA / numB : "Division by zero is not allowed.";
			break;
		  default:
			result = "Invalid operation";
		}
	  }
  
	  res.send(result.toString());
	});
  
	// Path parameter-based operations
	app.get("/lab5/calculator/:operation/:a/:b", (req, res) => {
	  const { a, b, operation } = req.params;
  
	  const numA = parseFloat(a);
	  const numB = parseFloat(b);
  
	  let result;
  
	  if (isNaN(numA) || isNaN(numB)) {
		result = "Invalid input: Parameters a and b must be numbers.";
	  } else {
		switch (operation) {
		  case "add":
			result = numA + numB;
			break;
		  case "subtract":
			result = numA - numB;
			break;
		  case "multiply":
			result = numA * numB;
			break;
		  case "divide":
			result = numB !== 0 ? numA / numB : "Division by zero is not allowed.";
			break;
		  default:
			result = "Invalid operation";
		}
	  }
  
	  res.send(result.toString());
	});
  }
  