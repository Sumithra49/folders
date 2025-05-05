function addElement(type) {
  const formBuilder = document.getElementById("form-builder");

  let element = document.createElement("div");
  element.className = "form-element";
  element.draggable = true;
  element.ondragstart = drag;

  let id = Date.now();
  element.dataset.type = type;
  element.dataset.id = id;

  if (type === "input") {
    element.innerHTML = `<label>Sample Input:</label> <br/>
                             <input type="text" placeholder="Enter text">
                             <span class="delete-btn" onclick="removeElement(${id})">❌</span>`;
  } else if (type === "textarea") {
    element.innerHTML = `<label>Sample Textarea:</label><br/>
                             <textarea placeholder="Enter text"></textarea>
                             <span class="delete-btn" onclick="removeElement(${id})">❌</span>`;
  } else if (type === "select") {
    element.innerHTML = `<label>Sample Select:</label><br/>
                             <select>
                                <option>Option 1</option>
                                <option>Option 2</option>
                             </select>
                             <span class="delete-btn" onclick="removeElement(${id})">❌</span>`;
  } else if (type === "checkbox") {
    element.innerHTML = `<label><input type="checkbox"> Sample Checkbox</label><br/>
                             <span class="delete-btn" onclick="removeElement(${id})">❌</span>`;
  }

  formBuilder.appendChild(element);
}

function removeElement(id) {
  let elements = document.querySelectorAll(".form-element");
  elements.forEach((el) => {
    if (el.dataset.id == id) {
      el.remove();
    }
  });
}

function saveForm() {
  let formElements = document.querySelectorAll(".form-element");
  let formJSON = [];

  formElements.forEach((el) => {
    let type = el.dataset.type;
    let label = el.querySelector("label").textContent;
    let placeholder =
      el.querySelector("input, textarea")?.getAttribute("placeholder") || "";

    let elementData = { type, label, placeholder };

    if (type === "select") {
      elementData.options = Array.from(
        el.querySelectorAll("select option")
      ).map((opt) => opt.textContent);
    }

    formJSON.push(elementData);
  });

  console.log("Saved Form JSON:", JSON.stringify(formJSON, null, 2));
}

// Drag-and-drop functionality
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.dataset.id);
}

function drop(event) {
  event.preventDefault();
  let draggedElementId = event.dataTransfer.getData("text");
  let draggedElement = document.querySelector(
    `.form-element[data-id='${draggedElementId}']`
  );

  let formBuilder = document.getElementById("form-builder");
  formBuilder.appendChild(draggedElement);
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
