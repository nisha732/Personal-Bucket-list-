
function addItem() {
    let input = document.getElementById("new-item");
    let list = document.getElementById("bucket-list");

    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.className = "list-item";
        li.innerHTML = input.value + ' <span class="icon">✨</span> <button onclick="removeItem(this)"&#10060;</button>';
        list.appendChild(li);
        
        let savedItems = JSON.parse(localStorage.getItem("bucketlist"));
        savedItems.push(input.value);
        localStorage.setItem("bucketlist", JSON.stringify(savedItems));

        input.value = "";
    }
}

function removeItem(button){
    let.itemText = button.parentElement.textContent.trim();
    let savedItems = JSON.parse(localStorage.getItem("bucketlist"));
    savedItems = savedItems.filter(item => item !== itemText);
    localStorage.setItem("bucketlist", JSON.stringify(savedItems));

    button.parentElement.remove();
}

function toggleCompleted(checkbox){
    let listItem = checkbox.parentElement;
    listItem.classList.toggle("completed");
}

