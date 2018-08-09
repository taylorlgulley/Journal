const DataManager = require("./DataManager.js")

function writeToDom () {
    DataManager.getJournalEntry()
        .then(entries => {
            document.querySelector("#journalEntry").innerHTML = ""
            let entryList = []
            entryList = entries
            entryList.forEach(entry => {
                document.querySelector("#journalEntry").innerHTML += `
                <div class="entry">
                    <h2>${entry.title}</h2>
                    <h4>${entry.content}</h4>
                    <p>${entry.date}</p>
                    <button class="deleteEntry" id="delete--${entry.id}">Delete Post</button>
                </div>
                `
            })
        })
}

module.exports = writeToDom