$(document).ready(function ()
{
  // Variables for maintaining calculator state
  let result = 0;
  let saved_result = false;
  let entry = "";

  // Calculator button event handler
  $("button").click(function ()
  {
      // Stores the button the user has pressed
      let button_click = $(this).text();

      // If the user is clicking the evaluation function
      if (button_click === "=")
      {
        // Only evaluate if there is input typed in
        if ($("#inputscreen h1").text() !== ""){
            try
            {
                // Attempt to evaluate the input
                result = result + parseFloat(eval(entry).toFixed(5));
                $("#outputscreen h1").html(entry + " = ");
                entry = result;
                saved_result = true;
            }
            catch (err)
            {
                // If the input is not evaluatable
                $("#outputscreen h1").html(entry + " = " + "ERROR");
                entry = "";
            }
        }
      }
      // Clear the input and output
      else if (button_click === "C")
      {
        saved_result = false;
        entry = "";
        result = 0;
        $("#inputscreen h1").html("");
        $("#outputscreen h1").html("");
      }
      // Delete a character
      else if (button_click === "CE")
      {
          entry = entry.substr(0, entry.length - 1);
      }
      else
      {
        // If there is a saved results and the user would like to
        // extend the previously computed value
        if (saved_result && ["/", "*", "-", "+"].includes(button_click))
        {
          saved_result = false;
          entry = result + button_click;
          result = 0;
        }
        // If there is a saved results but the user would like to
        // start a new calculation
        else if (saved_result)
        {
          saved_result = false;
          $("#outputscreen h1").html("ANS" + " = "+ result);
          entry = button_click;
          result = 0;
        }
        // Regular button click
        else
        {
          entry = entry + button_click;
        }
      }
      // Display the current input field values
      $("#inputscreen h1").html(entry);
    }
  )
});
