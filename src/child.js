function ChildComponent(props){
    const {name, age} = props;
    return (
    <div>
        <p>나는 {name}, {age}살 이다.</p>
    </div>);
}

export default ChildComponent;