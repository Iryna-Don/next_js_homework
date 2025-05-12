import {AddCar} from "@/server_actions/serverActions";

const CreateCar = () => {
    return (
        <div>
            <form action={AddCar}>
                <input type='text' name={'brand'} placeholder={'Brand of the car'} required={true}></input>
                <input type='number' name={'price'} placeholder={'Price'} required={true}></input>
                <input type='number' name={'year'} placeholder={'Year of manufacture'} required={true}></input>
                <button>Add Car Into Base</button>
            </form>
        </div>
    );
};

export default CreateCar;