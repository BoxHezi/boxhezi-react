import "./styles/Summary.css"

import { SummaryProps } from "./types/SummaryTypes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Summary(props: SummaryProps) {
  const linkMapper = {
    "github": <span><FontAwesomeIcon icon={ faGithub } /><span style={ { whiteSpace: "pre" } }>{ " " }</span>BoxHezi</span>,
    "linkedin": <span><FontAwesomeIcon icon={ faLinkedin } /><span style={ { whiteSpace: "pre" } }>{ " " }</span>Boxuan Lu</span>
  }

  const handleTitles = (titles: string[]) => {
    const contents = titles.map((title, i) => {
      return <span key={ i + title }>{ title } { i < titles.length - 1 ? " | " : null }</span>
    })

    return contents;
  }

  const handleLinks = (links: string[]) => {
    const linkToIcon = (url: string) => {
      if (url.includes("github.com")) {
        return linkMapper["github"];
      } else if (url.includes("linkedin.com")) {
        return linkMapper["linkedin"];
      }
    }

    const contents = links.map((link, i) => {
      return <span key={ i + link }><a href={ link } target="_blank" rel="noopener noreferrer">{ linkToIcon(link) }</a>{ i < links.length - 1 ? " | " : null }</span>;
    })
    return contents;
  }

  return (
    <div id="summary">
      <h2>{ props.name }</h2>
      <p>{ handleTitles(props.titles) }</p>
      <p>{ props.location }</p>
      <p>{ handleLinks(props.links) }</p>
    </div >
  )
}

export default Summary;