import React from 'react'


const Newsletter = () => {


    const onSubmitForm = (e) => {

        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                alert('Succesfully sent!')
                form.reset();
            } else {
                console.log('something went wrong')
            }
        };

        xhr.send(data);

    }

    return (
        <>
            <section className="newsletter-section">
                <div className="container-gt">
                    <form
                        onSubmit={(e) => onSubmitForm(e)}
                        action = "https://formspree.io/f/mknkvenn"
                        method="POST"
                    >

                        <div className="form-newsletter-wrapper">
                            <input name="email" type="email" placeholder="Enter email" />

                            <input name="author_name" type="hidden" value='Bruce Scott' />

                            <button>
                                <input type="submit" name="submit" />
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default Newsletter