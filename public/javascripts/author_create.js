document.addEventListener('DOMContentLoaded', () => {
    const createAuthorBtn = document.getElementById('createAuthorBtn');
    createAuthorBtn.addEventListener('click', () => {
        const authorData = {
            first_name: document.getElementById("first_name").value,
            family_name: document.getElementById("family_name").value,
            date_of_birth: document.getElementById("date_of_birth").value,
            date_of_death: document.getElementById("date_of_death").value
        };

        fetch('/catalog/api/author/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authorData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.errors) {
                console.log(data.errors);
                alert('Error creating author');
            } else {
                alert('Author created successfully');
                window.location.href = `/catalog/author/${data.author._id}`;
            }
        })
        .catch(error => {
            console.error('Error creating author:', error);
        });
    });
});
