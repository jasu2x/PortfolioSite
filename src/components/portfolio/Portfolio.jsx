import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected,setSelected] = useState("featured")
  const [data,setData] = useState([])

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(()=>{         /*to use effect imported from data.js which enables hover effect on buttons on portfolio */
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
        case "web":
        setData(webPortfolio);
        break;
        case "mobile":
        setData(mobilePortfolio);
        break;
        case "design":
        setData(featuredPortfolio);
        break;
        case "content":
        setData(featuredPortfolio);
        default:
          setData(featuredPortfolio)
    }
  },[selected])

  return (
    
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
            <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}   /*moved list li from main portfolio */
            id={item.id}/>    
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(

          
        <div className="item">
          <img src={d.img}
          alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
