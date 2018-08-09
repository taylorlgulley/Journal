const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#journalName").value = ""
            document.querySelector("#entryContent").value = ""
        }
    },
    renderEntryForm: {
        value: () => {
            return `
                <fieldset>
                    <label for="journalName">Journal name:</label>
                    <input required type="text" id="journalName">
                </fieldset>
                <fieldset class="entryContent">
                    <label for="entryContent">Entry:</label>
                    <textarea id="entryContent" rows="10"></textarea>
                </fieldset>
                <button id="saveEntry">Save Entry</button>
            `
        }
    }
})

module.exports = FormManager