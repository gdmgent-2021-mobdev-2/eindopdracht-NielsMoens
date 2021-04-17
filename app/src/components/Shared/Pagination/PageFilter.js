import Button from "../../Design/Button";

const PageFilter = ({currentPage , max, onClick}) => {
    let array = [];
    for(let i = 1; i<= max; i++){
        array.push(
            <li key={i} className={currentPage === i? "active" :""}>
                <Button onClick = {() => onClick(i)}>{i}</Button>
            </li>
        )
    }
    return (
        <nav className="d-flex justify-content-center ">
            <ul className="d-flex flex-row">
                <Button disabled = {currentPage === 1}onClick={() => onClick(currentPage - 1)}>&lt;</Button>
                {array}
                <Button disabled = {currentPage === max} onClick={() => onClick(currentPage + 1)}>&gt;</Button>
            </ul>
        </nav>
    )
};

export default PageFilter;