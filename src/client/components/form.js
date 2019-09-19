import * as React from "react";
import useForm from "react-hook-form";

const Form = () => {
    const {register, handleSubmit, errors} = useForm(); // Initialise
    // We retrieve the information as an object
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>{"Name's bank : "}</label>
                <input
                    type={"text"}
                    name={"name"}
                    // Required
                    ref={register({required: true})}
                />
                <br />
                {/* if empty, error + error sentence */}
                {errors.name && "Name's bank is required."}
                <br />
                <h4>{"Adress : "}</h4>
                <br />
                <label>{"street : "}</label>
                <input
                    type={"text"}
                    name={"street"}
                    ref={register({required: true})}
                />
                <br />
                {errors.street && "Street is required."}
                <br />
                <label>{"Number : "}</label>
                <input
                    type={"number"}
                    name={"numberStreet"}
                    ref={register({required: true})}
                />
                <br />
                {errors.numberStreet && "Street's number is required."}
                <br />
                <label>{"Postal code : "}</label>
                <input
                    type={"number"}
                    name={"postalCode"}
                    ref={register({required: true})}
                />
                <br />
                {errors.postalCode && "Postal code is required."}
                <br />
                <label>{"City : "}</label>
                <input
                    type={"text"}
                    name={"city"}
                    ref={register({required: true})}
                />
                <br />
                {errors.city && "City is required."}
                <br />
                <label>{"Country : "}</label>
                <input
                    type={"text"}
                    name={"country"}
                    ref={register({required: true})}
                />
                <br />
                {errors.country && "Country is required."}
                <br />
                <input type={"submit"} />
            </form>
        </div>
    );
};

export default Form;
