$(document).ready(function ()
{
  let result = 0;
  let saved_result = false;
  let entry = "";

  $("button").click(function ()
  {
      let button_click = $(this).text();

      if (button_click === "=")
      {
        // Only evaluate if there is input typed in
        if ($("#inputscreen h1").text() !== ""){
            try
            {
                result = result + parseFloat(eval(entry).toFixed(5));
                $("#outputscreen h1").html(entry + " = " + result);
                entry = "";
                saved_result = true;
            }
            catch (err)
            {
                $("#outputscreen h1").html(entry + " = " + "ERROR");
                entry = "";
            }
        }
      }
      else if (button_click === "C")
      {
        saved_result = false;
        entry = "";
        result = 0;
        $("#inputscreen h1").html("");
        $("#outputscreen h1").html("");
      }
      else if (button_click === "CE")
      {
          entry = entry.substr(0, entry.length - 1);
      }
      else
      {
        if (saved_result && ["/", "*", "-", "+"].includes(button_click))
        {
          saved_result = false;
          entry = result + button_click;
          result = 0;
        }
        else if (saved_result)
        {
          saved_result = false;
          $("#outputscreen h1").html("ANS" + " = "+ result);
          entry = entry + button_click;
          result = 0;
        }
        else
        {
          entry = entry + button_click;
        }
      }
      $("#inputscreen h1").html(entry);
    }
  )
});
