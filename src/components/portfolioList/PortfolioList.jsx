import "./portfolioList.scss"

export default function PortfolioList({id, title, active, setSelected }) {
  return <li className={active ? "portfolioList active" : "portfolioList"} 
  onClick={() => setSelected(id)}>
    {title}
    </li>
    
}


{/*
<li className="active">Featured</li>
        <li>Web App</li>
        <li>Full Stack App</li>
        <li>Flashcard App</li>
<li>Web App</li>  */}