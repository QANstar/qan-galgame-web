import React from "react";
import ILinesItem from "../interface/ILinesItem";
import { Link } from "react-router-dom";
interface Props {
  data: ILinesItem;
  openSave: () => void;
}
function PlayBg(props: Props) {
  const test = (e: any) => {
    e.stopPropagation();
  };
  const openSave = (e: any) => {
    e.stopPropagation();
    props.openSave();
  };
  return (
    <div className="play-lines">
      <div className="play-lines-name">{props.data.chara}</div>
      <div className="play-lines-text">{props.data.lines}</div>
      <div className="play-tool">
        <ul>
          <li>
            <Link to="/">Title</Link>
          </li>
          <li onClick={test}>Auto</li>
          <li>Skip</li>
          <li>Back</li>
          <li>Next</li>
          <li onClick={openSave}>Save</li>
          <li>Load</li>
          <li>Config</li>
        </ul>
      </div>
    </div>
  );
}

export default PlayBg;
