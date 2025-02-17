import { useState, useEffect } from 'react'
import axios from 'axios';
import Row from './Row';

function App() {

  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(1);
  const [search, setSearch] = useState("");
  const [salary, setSalary] = useState(0);
  const [condition, setCondition] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/data").then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  })

  return (
    <div>
      <input type="text" onChange={((e) => { setSearch(e.target.value) })}></input>

      <select onChange={((e) => { setCondition(e.target.value) })}>
        <option value="">

        </option>
        <option value="<">
          &lt;
        </option>
        <option value=">">
          &gt;
        </option>
      </select>
      <input type="number" onChange={((e) => { setSalary(e.target.value) })}></input>
      <table className="table">
        <thead></thead>
        <tbody>
          {data.map((row) => {
            if (search != "") {
              if (row.first_name.toLowerCase().includes(search.toLowerCase()) || row.last_name.toLowerCase().includes(search.toLowerCase())) {
                if ((condition == "<" && row.salary < salary) || (condition == ">" && row.salary > salary) || condition == "") {
                  return (
                    <Row
                      key={row.id}
                      id={row.id}
                      first_name={row.first_name}
                      last_name={row.last_name}
                      department={row.department}
                      position={row.position}
                      hire_date={row.hire_date}
                      salary={row.salary}
                      clicked={row.id == clicked}
                    />
                  )
                }

              }
            }
            else {
              if ((condition == "<" && row.salary < salary) || (condition == ">" && row.salary > salary) || condition == "") {
                return (
                  <Row
                    key={row.id}
                    id={row.id}
                    first_name={row.first_name}
                    last_name={row.last_name}
                    department={row.department}
                    position={row.position}
                    hire_date={row.hire_date}
                    salary={row.salary}
                    clicked={row.id == clicked}
                  />
                )
              }

            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
