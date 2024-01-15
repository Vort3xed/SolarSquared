/* eslint-disable */
import Button from "../buttonv2/ButtonV2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const notify = () => toast.success("Sent message!");
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2dfbd463-8409-498c-bfc2-7d72d86109b2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            // toast.success("Sent", {
            //     position: toast.POSITION.BOTTOM_CENTER,
            //     autoClose: 3000, // Duration in milliseconds
            //     hideProgressBar: true,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            // });


            console.log(result);
        }
        
    }

    return (
        <>
        {typeof window !== 'undefined' && (
                <ToastContainer />
            )}
            <section className="container-70 overflow-hidden p-4">
                <div className='grid grid-cols-1 gap-2'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label for="small-input" class="text-lg block mb-2 font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name='name' id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <label for="email-address-icon" class="pt-4 block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Email</label>
                        <div class="relative">
                            <input type="email" name='email' id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                        </div>
                        <label for="message" class="pt-4 block mb-2 text-lg font-medium text-gray-900 dark:text-white">Message</label>
                        <textarea id="message" rows="4" name='message' class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        {/* <button type="submit">Submit Form</button> */}
                        <a>
                            <button type="submit" onClick={notify} class="inline-flex items-center justify-center w-full px-4 py-2 mt-4 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Submit
                            </button>
                        </a>
                    </form>
                </div>
            </section>



        </>
    );
}