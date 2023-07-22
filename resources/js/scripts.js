//Admin Status & Ops Feed Functions

function opsUpdate() {
  //Prevent default submissions
  event.preventDefault();
  // Get input value from "adStat" field
  const adStat = document.getElementById('adStat').value.trim();

  // If input is empty, do nothing
  if (adStat === "") {
    return;
  }
  // Create new li, appending the input value
  const listItem = document.createElement('li');
  listItem.textContent = adStat;

  // Get the ul element with id "ops"
  const opsList = document.getElementById('ops');

  const totalItems = opsList.getElementsByTagName("li");
  const sumItems = totalItems.length;

  if (sumItems >= 13) {
    // If there are already six list items, remove the last one
    opsList.removeChild(totalItems[sumItems - 1]);
  }

  // Add the new list item to the beginning of the ul element
  opsList.insertBefore(listItem, opsList.firstChild);

  // Clear the input field for the next entry
  document.getElementById("adStat").value = "";
}
