document.addEventListener('DOMContentLoaded', function() {
    const subscriberForm = document.getElementById('subscriber-form');
    const formMsg = document.getElementById('form-msg');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');

    subscriberForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Serialize Form
        const formData = new FormData(subscriberForm);
        const subscriberData = new URLSearchParams(formData).toString();

        // Submit Form
        fetch(subscriberForm.getAttribute('action'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: subscriberData
        })
            .then(response => {
                if (!response.ok) {
                    // If the response status is not OK (200–299), throw an error
                    return response.text().then(text => { throw new Error(text); });
                }
                return response.text();
            })
            .then(responseText => {
                // If Success
                formMsg.classList.remove('error');
                formMsg.classList.add('success');

                // Set Message Text
                formMsg.textContent = responseText;

                // Clear Fields
                nameField.value = '';
                emailField.value = '';
            })
            .catch(error => {
                // If Error
                formMsg.classList.remove('success');
                formMsg.classList.add('error');

                // Set Message Text
                formMsg.textContent = error.message || 'Message Was Not Sent';
            });
    });
});
