import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTech } from "~/store/modules/techs/actions";

// import { Container } from './styles';

export default function TechList() {
  // const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");

  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);

  // useEffect(() => {
  //   const strTechs = localStorage.getItem("techs");
  //   if (strTechs) setTechs(JSON.parse(strTechs));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("techs", JSON.stringify(techs));
  // }, [techs]);

  function handleAddTech() {
    dispatch(addTech(newTech));
    // setTechs([...techs, newTech]);
    setNewTech("");
  }

  return (
    <div>
      <form data-testid="tech-form" onSubmit={handleAddTech}>
        <ul data-testid="tech-list">
          {techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <label htmlFor="tech">Tech</label>
        <input
          type="text"
          id="tech"
          value={newTech}
          onChange={e => setNewTech(e.target.value)}
        />
        <button onClick={handleAddTech}>Adicionar</button>
      </form>
    </div>
  );
}
