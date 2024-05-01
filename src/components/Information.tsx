import InformationBlock from "./InformationBlock"
import "./styles/Information.css"
import { informationBlock, informationBlockItems } from "./types/InformationTypes"

import data from "../data.json"


function Information() {

  const handleData = (target: string): informationBlock => {
    const result: informationBlock = {
      blockName: "",
      items: []
    }
    for (const [k, v] of Object.entries(data)) {
      if (k === target) {
        result.blockName = k;
        for (const i of v) {
          const temp: informationBlockItems = {
            contents: []
          }
          for (const [ik, iv] of Object.entries(i)) {
            if (ik === "title") {
              temp.title = iv
            } else if (ik === "timeframe") {
              temp.timeframe = iv
            } else if (ik === "subtitle") {
              temp.subtitle = iv
            } else if (ik === "contents") {
              temp.contents = iv
            } else if (ik === "links") {
              temp.links = iv
            }
          }
          result.items.push(temp);
        }
      }
    }
    return result;
  }

  const summaryBlock = handleData("summary");
  const experienceBlock = handleData("experience");
  const projectBlock = handleData("project");
  const educationBlock = handleData("education");
  const certificationBlock = handleData("certification");

  return (
    <div className="information-container">
      <InformationBlock blockName={ summaryBlock.blockName } items={ summaryBlock.items } />
      <InformationBlock blockName={ experienceBlock.blockName } items={ experienceBlock.items } />
      <InformationBlock blockName={ projectBlock.blockName } items={ projectBlock.items } />
      <InformationBlock blockName={ educationBlock.blockName } items={ educationBlock.items } />
      <InformationBlock blockName={ certificationBlock.blockName } items={ certificationBlock.items } />
    </div>
  )
}

export default Information