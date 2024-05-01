
import { ReactElement } from "react";
import { informationBlockItems } from "./types/InformationTypes";

import styles from "./styles/InformationBlockItem.module.css"
import "./styles/InformationBlockItem.css"

function InformationBlockItems(props: informationBlockItems) {

  const handleItems = (target: string) => {
    let contents: ReactElement[] = [];
    if (target === "title") {
      if (props.title) {
        return <h3>{ props.title }</h3>
      }
    } else if (target === "duration") {
      if (props.timeframe) {
        return <p>{ props.timeframe }</p>
      }
    } else if (target === "subtitle") {
      if (props.subtitle) {
        return <h4 className="subtitle">{ props.subtitle }</h4>
      }
    } else if (target === "contents") {
      let counter = 0;
      for (const i of props.contents) {
        const key = i + counter;
        contents.push(<li key={ key }>{ i }</li>)
        counter++;
      }
      if (props.links) {  // check if there are corresponding links
        const linkElements = handleLinks(props.links);
        contents = contents.concat(linkElements);
      }
    }
    return contents;
  }

  const handleLinks = (links: string[]) => {
    const contents: ReactElement[] = [];
    for (const i of links) {
      const linkContents = {
        linkTitle: "",
        link: ""
      }
      for (const [k, v] of Object.entries(i)) {
        if (k === "linkTitle") {
          linkContents.linkTitle = v
        } else {
          linkContents.link = v;
        }
      }
      const key = linkContents.linkTitle + linkContents.link;
      contents.push(
        <li key={ key }>
          <a href={ linkContents.link } target="_blank" rel="noopener noreferrer" className={ styles.link }>
            { linkContents.linkTitle ? linkContents.linkTitle : linkContents.link }
          </a>
        </li>)
    }
    return contents;
  }

  return (
    <div>
      <div className="item-flex">
        { handleItems("title") }
        { handleItems("duration") }
      </div>
      <div className="item-flex">
        { handleItems("subtitle") }
      </div>
      <ul>{ handleItems("contents") }</ul>
    </div>
  )
}

export default InformationBlockItems;
