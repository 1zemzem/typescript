import React from "react";
import { Greet } from "./components/Greets";
import { Person } from "./components/Person";
import './App.css';
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { LoggedIn } from "./components/LogggedIn";
import { User } from "./components/User";

function App() {

  const personName = {
    first: 'bdvhse',
    last: 'hbfvbh'
  }

  const nameList = [
    {
      first: 'bdvhse',
      last: 'hbfvbh'
    },
    {
      first: 'bdvhhhbe',
      last: 'hbfnnhbh'
    },
    {
      first: 'vhse',
      last: 'hbbh'
    },  
  ]

  return <div className="App">
    <Heading>Placeholder</Heading>
    <Greet name="ttt" isLogged={true}/>
    <Person name={personName} />
    <PersonList names={nameList} />
    <Status status="loading"/>    
    <Oscar>
      <Heading>Oscar goes</Heading>
    </Oscar>
    <Button handleClick={(event, id) => {
      console.log("button cliked", event, id)
    }}/>
    <Input value="" handleChange={(event) => {
      return console.log(event);
    }}/>
    <LoggedIn />
    <User />
  </div>
}

export default App;