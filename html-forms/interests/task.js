const interestCheckboxes = document.querySelectorAll(".interest__check");

function handleChange(event) {
	const checkbox = event.target;
	updateChildCheckboxes(checkbox);
}

function updateChildCheckboxes(checkbox) {
	const childCheckboxes = checkbox.closest(".interest").querySelectorAll(".interest__check");

	childCheckboxes.forEach(childCheckbox => {
		if (childCheckbox.checked !== checkbox.checked) {
			childCheckbox.checked = checkbox.checked;
			updateChildCheckboxes(childCheckbox);
		}
	});
}

interestCheckboxes.forEach(checkbox => {
	checkbox.addEventListener("change", handleChange);
});
