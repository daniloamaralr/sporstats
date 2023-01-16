import "./TransferDate.css";
function TransferDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});  
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});  
    const year = props.date.getFullYear();  
    return(
        <div className="transfer-date">
            <div className="transfer-date__month">{month}</div>
            <div className="transfer-date__year">{year}</div>
            <div className="transfer-date__day">{day}</div>
        </div>
    )
}

export default TransferDate;
