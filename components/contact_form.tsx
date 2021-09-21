import axios, { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';

const ContactForm: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    async function submitForm(values: any) {
        const success_msg = document.getElementById('success_msg');
        let config: AxiosRequestConfig = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: values,
        };

        try {
            const response = await axios(config);
            console.log(response);
            if (response.status == 200) {
                console.log("Success")
                reset(); // Clear the form
                // Display success message on page
                if (success_msg != null && success_msg != undefined) {
                    if (success_msg.style.display == 'none' || success_msg.style.display == '') {
                        success_msg.style.display = 'block';
                    }
                }
            }
        } catch (err) {
            console.error(err);
            // Display error on page
            if (success_msg != null && success_msg != undefined) {
                if (success_msg.style.display == 'none' || success_msg.style.display == '') {
                    success_msg.style.display = 'block';
                    success_msg.style.backgroundColor = 'red';
                    success_msg.innerHTML = 'Sorry, an error occured.'
                }
            }
        }
    }

    return (
        <div className="w-96">
            <form className="text-xl text-black"
                onSubmit={handleSubmit(submitForm)}>
                <input
                    className="bg-gray-300 mt-0"
                    type="text"
                    name="name"
                    ref={register({
                        required: {
                            value: true,
                            message: "Please enter your name"
                        }
                    })}
                    placeholder="Full Name">
                </input>
                <span className="text-red-600 text-sm p-0 m-0 font-semibold pl-4">
                    {errors?.name?.message}
                </span>

                <input
                    className="bg-gray-300"
                    type="text"
                    name="reason"
                    ref={register({
                        required: {
                            value: true,
                            message: "Please enter your reason for contacting us"
                        }
                    })}
                    placeholder="Reason for Contact">
                </input>
                <span className="text-red-600 text-sm p-0 m-0 font-semibold pl-4">
                    {errors?.reason?.message}
                </span>

                <textarea
                    className="w-96 h-56 bg-gray-300"
                    name="message"
                    ref={register({
                        required: {
                            value: true,
                            message: "Please enter a message"
                        }
                    })}
                    placeholder="Your Message">
                </textarea>
                <span className="text-red-600 text-sm p-0 m-0 font-semibold pl-4">
                    {errors?.message?.message}
                </span>

                <input
                    className="bg-gray-300"
                    type="email"
                    name="email"
                    ref={register({
                        required: {
                            value: true,
                            message: "Please enter your email address"
                        }
                    })}
                    placeholder="Email">
                </input>
                <span className="text-red-600 text-sm p-0 m-0 font-semibold pl-4">
                    {errors?.email?.message}
                </span>

                <input
                    className="bg-gray-300"
                    type="text"
                    name="phone"
                    ref={register}
                    placeholder="Phone">
                </input>

                <input type="submit" value="Submit" className="cursor-pointer bg-black text-white hover:opacity-80"></input>
            </form>
            <h1 id="success_msg" className="w-96 bg-blue-500 text-white text-center mt-2 p-1 rounded-xl hidden">Thank you, your message has been sent</h1>
        </div>
    )
}

export default ContactForm;
