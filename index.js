// Wait for the document to finish loading
$(document).ready(function() {
  // Get input elements from the HTML document
  const $num1Input = $('#num1');
  const $num2Input = $('#num2');
  const $operationSelect = $('#operation');
  const $nameInput = $('#name');
  const $lastNameInput = $('#last-name');
  const $resultDiv = $('#result');

  // Define a function that performs arithmetic operations
  function performOperation(num1, num2, operation) {
    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operation';
    }
    return result;
  }

  // Define a function that handles the submit event of the arithmetic form
  function handleArithmeticFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values from the form
    const num1 = parseFloat($num1Input.val());
    const num2 = parseFloat($num2Input.val());
    const operation = $operationSelect.val();

    // Perform the arithmetic operation
    const result = performOperation(num1, num2, operation);

    // Display the result
    $resultDiv.text(result);
  }

  // Define a function that handles the submit event of the greeting form
  function handleGreetingFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values from the form
    const firstName = $nameInput.val();
    const lastName = $lastNameInput.val();

    // Display the greeting
    $resultDiv.text('Hello ' + firstName + ' ' + lastName);
  }

  // Attach event listeners to the forms
  $('#arithmetic-form').submit(handleArithmeticFormSubmit);
  $('#greeting-form').submit(handleGreetingFormSubmit);
});
