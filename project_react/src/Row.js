function Row(props){
    return(
        <tr className={{backgroundColor: props.clicked ? 'red' : ''}}>
            <td>{props.id}</td>
            <td>{props.last_name}</td>
            <td>{props.first_name}</td>
            <td>{props.department}</td>
            <td>{props.position}</td>
            <td>{props.hire_date}</td>
            <td>{props.salary}</td>
        </tr>
    );
}

export default Row;