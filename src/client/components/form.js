import * as React from "react";
import useForm from "react-hook-form";

const styleForm = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
};
const styleTitleModal = {
    textAlign: "center",
};

const Form = props => {
    const {register, handleSubmit, errors} = useForm(); // Initialise
    // We retrieve the information as an object
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div style={styleForm}>
            <div>
                <h2 style={styleTitleModal}>{props.title}</h2>
            </div>
            <form method={"post"} onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>{"Bank"} </legend>
                    <div className={"labelInput"}>
                        <label>{"Name's bank : "}</label>
                        <input
                            type={"text"}
                            name={"name"}
                            // Required
                            ref={register({required: true})}
                        />
                    </div>

                    {/* if empty, error + error sentence */}
                    <div className={"errorForm"}>
                        {errors.name && "Name's bank is required."}
                    </div>
                </fieldset>

                <fieldset>
                    <legend>{"Adress "} </legend>
                    <div className={"labelInput"}>
                        <label>{"street : "}</label>
                        <input
                            type={"text"}
                            name={"street"}
                            ref={register({required: true})}
                        />
                    </div>

                    <div className={"errorForm"}>
                        {errors.street && "Street is required."}
                    </div>

                    <div className={"labelInput"}>
                        <label>{"Number : "}</label>
                        <input
                            type={"number"}
                            name={"numberStreet"}
                            ref={register({required: true})}
                        />
                    </div>

                    <br />
                    <div className={"errorForm"}>
                        {errors.numberStreet && "Street's number is required."}
                    </div>
                    <br />
                    <div className={"labelInput"}>
                        <label>{"Postal code : "}</label>
                        <input
                            type={"number"}
                            name={"postalCode"}
                            ref={register({required: true})}
                        />
                    </div>

                    <div className={"errorForm"}>
                        {errors.postalCode && "Postal code is required."}
                    </div>

                    <div className={"labelInput"}>
                        <label>{"City : "}</label>
                        <input
                            type={"text"}
                            name={"city"}
                            ref={register({required: true})}
                        />
                    </div>

                    <div className={"errorForm"}>
                        {errors.city && "City is required."}
                    </div>

                    <div className={"labelInput"}>
                        <label>{"Country : "}</label>
                        <input
                            type={"text"}
                            name={"country"}
                            ref={register({required: true})}
                        />
                    </div>

                    <div className={"errorForm"}>
                        {errors.country && "Country is required."}
                    </div>
                </fieldset>

                <div>
                    <input type={"submit"} value={"submit"} />
                </div>
            </form>
        </div>
    );
};

export default Form;
