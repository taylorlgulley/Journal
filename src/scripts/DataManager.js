const DataManager = Object.create(null, {
    saveJournalEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            body: JSON.stringify(entry)
            })
            .then(response => response.json())
        }
    },
    getJournalEntry: {
        value: () => {
            return fetch("http://localhost:8088/entries?_order=desc&_sort=id")
                .then(response => response.json());
        }
    },
    deleteJournalEntry: {
        value: (id) => {
            return fetch(`http://localhost:8088/entries/${id}`, {
                method: "DELETE"
            })
            .then(r =>r.json())
        }
    }
})

module.exports = DataManager