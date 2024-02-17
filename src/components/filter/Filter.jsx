import { useState } from "react";
import "./filter.css";
import { ReactComponent as EnergyIcon } from './svg/energy.svg';
import { ReactComponent as ConsumerDiscretionary } from './svg/ConsumerDiscretionary.svg';
import { ReactComponent as Communication} from './svg/Communication.svg';
import { ReactComponent as ConsumerStaples } from './svg/ConsumerStaples.svg';
import { ReactComponent as Financials } from './svg/Financials.svg';
import { ReactComponent as HealthCare } from './svg/HealthCare.svg';
import { ReactComponent as Industrials } from './svg/Industrials.svg';
import { ReactComponent as IT } from './svg/IT.svg';
import { ReactComponent as Materials } from './svg/materials.svg';
import { ReactComponent as RealeEstate } from './svg/RealeEstate.svg';
import { ReactComponent as Utilities } from './svg/Utilities.svg';

function Filter() {
  const [textareaValue, setTextareaValue] = useState("");
  const handleClearAll = () => {
    setTextareaValue("");
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  return (
    <div className="filter">
      <div className="content">
        <h3>Filters</h3>
        <div className="top-section flex">
          <span>Filter Applied</span>
          <button onClick={handleClearAll}>Clear All</button>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={textareaValue}
          onChange={handleTextareaChange}
        ></textarea>
        <div className="bottom-section">
          <div className="search-block">
            <p>Stock</p>
            <button className="search-bar">
              <input type="" placeholder="$ TICKER" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="industry-block">
            <p className="industry-cat">
              <i className="fa-solid fa-angle-down"></i> Industry
            </p>
            <ul className="industry-list">
              <li>
                <HealthCare />
                <span>Health Care</span>
              </li>
              <li>
                <Materials />
                <span>Materials</span>
              </li>
              <li>
                <EnergyIcon />
                <span>Energy</span>
              </li>
              <li>
                <ConsumerDiscretionary />
                <span>Consumer Discretionary</span>
              </li>
              <li>
                <ConsumerStaples />
                <span>Consumer staples</span>
              </li>
              <li>
                <RealeEstate />
                <span>Real estate</span>
              </li>
              <li>
                <IT />
                <span>IT</span>
              </li>
              <li>
                <Communication />
                <span>Communication</span>
              </li>
              <li>
                <Industrials />
                <span>Industrials</span>
              </li>
              <li>
                <Utilities />
                <span>Utilities</span>
              </li>
              <li>
                <Financials />
                <span>Financials</span>
              </li>
            </ul>
          </div>
          <div className="radios flex">
            <div className="left-radio flex">
              <p>
                <i className="fa-solid fa-angle-down"></i> Market Cap
              </p>
              <span>
                <input type="radio" id="micro" name="market" />
                <label htmlFor="micro">Micro</label>
              </span>
              <span>
                <input type="radio" id="small" name="market" />
                <label htmlFor="small">Small</label>
              </span>
              <span>
                <input type="radio" id="large" name="market" />
                <label htmlFor="large">Large</label>
              </span>
            </div>
            <div className="right-radio flex">
              <p>
                <i className="fa-solid fa-angle-down"></i> Risk Lavel
              </p>
              <span>
                <input type="radio" id="low" name="risk" />
                <label htmlFor="low">Low Risk</label>
              </span>
              <span>
                <input type="radio" id="mid" name="risk" />
                <label htmlFor="mid">Mid Risk</label>
              </span>
              <span>
                <input type="radio" id="high" name="risk" />
                <label htmlFor="high">Low Risk</label>
              </span>
            </div>
          </div>
          <div className="options flex">
            <div className="left-option">
              <p>Strategy</p>
              <ul>
                <li>Big Option Buys</li>
                <li>Merger Arbitrage</li>
                <li>Short Reports</li>
              </ul>
            </div>
            <div className="right-option">
              <p>Asset</p>
              <ul>
                <li>Stocks</li>
                <li>Options</li>
                <li>Features</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="apply">Apply</button>
      </div>
    </div>
  );
}

export default Filter;
