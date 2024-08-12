import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import WorkerList from "./WorkerList";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");


    const minimumWage = 17002;

    const workerNameChangeHandler = (e) => {
        setEnteredWorkerName(e.target.value)
    }

    const wageChangeHandler = (e) => {
        setEnteredWage(e.target.value)
    }

    const addWorkerHandler = (e) => {
        e.preventDefault();
        if(
            enteredWorkerName.trim().length === 0 || 
            enteredWage.trim().length === 0
        ){
            return;
        }
        
        if(+enteredWage <= minimumWage)
        {
            return;
        }   

        setEnteredWage("");
        setEnteredWorkerName("");
        props.setWorkers((prevState) => [
            {
                id: Math.floor(Math.random() * 100000),
                name: enteredWorkerName,
                wage: enteredWage
            },
            ...prevState,
        ])
        
    }
 
  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          className="max-w-[40rem] w-full mx-auto border p-2"
          type="text"
          placeholder="Çalışan ismi yazınız."
          id="name"
          onChange={workerNameChangeHandler}
          value={enteredWorkerName}
        />
        <label htmlFor="wage" className="font-medium">
          Maaş miktarı
        </label>
        <input
          className="max-w-[40rem] w-full mx-auto border p-2"
          type="number"
          placeholder="Maaş miktarı yazınız."
          id="wage"
          onChange={wageChangeHandler}
          value={enteredWage}
        />
        <Button className="mt-2">Ekle</Button>        
      </form>    
    </Card>
  );
};

export default AddWorker;
