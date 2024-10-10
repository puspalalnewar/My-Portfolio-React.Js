import React from 'react'

const ContactForm = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cf70bdcf-7b73-4e72-a431-a2707f8a3dac");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='w-100%'>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" required placeholder='Full name' className='w-full h-[2.7rem] mb-4 bg-zinc-50/10 p-4 rounded-md' />
                <input type="email" name="email" required placeholder='Gmail' className='w-full h-[2.7rem] mb-4 bg-zinc-50/10 p-4 rounded-md' />
                <textarea name="message" required placeholder='Write Your Needs' className='w-full h-[6rem] mb-1 bg-zinc-50/10 p-4 rounded-md'></textarea>
                <button type="submit" className='h-[3rem] p-4 rounded cursor-pointer bg-[#76d4ff] text-black text-sm'>Submit Form</button>
            </form>
            <span>{result}</span>

        </div>
    )
}

export default ContactForm
