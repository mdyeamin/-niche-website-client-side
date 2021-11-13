

import { useForm } from "react-hook-form";
const Review = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();






    const onSubmit = data => {
        fetch("https://polar-anchorage-77729.herokuapp.com/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Review successfully');
                    reset()
                }
            })

        console.log(data)

    };
    return (
        <div>
            <form className="booking" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="name"  {...register("name")} />
                <input type="text" placeholder="Review"  {...register("review")} />
                <input type="number" placeholder="rating (0-5)"  {...register("rating")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="btn btn-light" type="submit" />
            </form>

        </div>
    );
};

export default Review;