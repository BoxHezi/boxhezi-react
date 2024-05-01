import "./styles/InformationBlock.css"

import { ReactElement } from "react"

import InformationBlockItems from "./InformationBlockItem"
import { informationBlock } from "./types/InformationTypes"

function InformationBlock(props: informationBlock) {

  const handleBlockItems = () => {
    const contents: ReactElement[] = [];
    let counter = 0;
    for (let i of props.items) {
      const k = Object.keys(i);
      const key = k.join("") + counter;
      const item = <InformationBlockItems key={ key } title={ i.title } timeframe={ i.timeframe } subtitle={ i.subtitle } contents={ i.contents } links={ i.links }/>
      contents.push(item)
      counter++;
    }
    return contents;
  }

  return (
    <div>
      <div className="title"><h2>{ props.blockName.charAt(0).toUpperCase() + props.blockName.slice(1) }</h2></div>
      <hr />
      { handleBlockItems() }
    </div>
  )
}

export default InformationBlock