import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small"/>

      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$425.00</p>
        <p className="desc">Previous transsactions Processing. Last Payments may not be included.</p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">target</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                <div className="resultAmount">$8.4k</div>
              </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last week</div>
              <div className="itemResult negative">
                <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                <div className="resultAmount">$10.4k</div>
              </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                <div className="resultAmount">$120.4k</div>
              </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Featured