const Button = props => {
  //  Write your code here.
  const {className,text}=props;
  return <button className={`button ${className}`>{text}</button>;

}

const element = (
  //  Write your code here.
  <div className="bg-cont">
      <h1 className="head">Social Buttons</h1>
      <div className="card">
          <Button className="but1" text="Like"/>
          <Button className="but2" text="Comment"/>
          <Button className="but3" text="Share"/>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
