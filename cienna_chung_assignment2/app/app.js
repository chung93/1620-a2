//All of the below should be done on a single index.html page. create, remove or hide and show objects where needed.

//clicking on the New Budget button should allow users to create a new budget. 
//Users should be able to give the budget a title, create budget items and delete a budget. The items should add or subtract from a total (total should be created as you add items)

const inputAmount = document.querySelector("#number");
const addForm = document.querySelector("#newForm");
const budget = document.querySelector("#addForm");

const editForm = document.querySelector("#edit");
const saveEdit = document.querySelector("#submitAmt");
const editNum = document.querySelector("#editNum");

const deleteBudget = document.querySelector("#delBudget");

function getBudget(amount) {
  if (!amount) {
    inputAmount.placeholder = "input can not be empty";

} else {
    budget.innerText = amount;
    inputAmount.value = "";
    }
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getBudget(inputAmount.value);
});


saveEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    getVal(editNum.value, saveEdit.children[2].id);
});

function editBudget(id) {
    budget.findIndex((item) => {
      if (item.id === id) {
        editNum.value = item.number;
        saveEdit.children[2].id = item.id;
        }
    });
}

function delBudget(id) {
    deleteBudget.addEventListener("click", (e) => {
        budget.remove();
    });
}

//After a budget has been created the main view should display your budgets Title and total in a card

//clicking on a budget card should open that budget up for further editing.

//Store your budgets in an Array of budget items. `[ { title item1, item2, total } ]`

