
import { useState } from "react";
import data from './data'

export default function Measurements() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(cpyMultiple)
    }

    console.log(selected, multiple);
    return (

        <div className="wrapper">
            <button className="enable-btn" onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
              Enable Multi Selection
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item" key={dataItem.id}>
                                <div
                                    onClick={
                                        enableMultiSelection
                                            ? () => handleMultiSelection(dataItem.id)
                                            : () => handleSingleSelection(dataItem.id)
                                    }
                                    className="title">
                                    <h3 className="data-title">{dataItem.title}</h3>

                                    <div className="span">
                                        <span style={{color: "#3b1803", fontSize: 20}}>&#9830;</span>
                                    </div>
                                </div>
                                {
                                    enableMultiSelection ?
                                        multiple.indexOf(dataItem.id) !== -1 &&
                                        <div className="content">    <p className="content">{dataItem.paragraph}</p></div> :
                                        selected === dataItem.id && <div className="content">    <p>{dataItem.paragraph}</p></div>

                                }

                                {/* {
                                    selected === dataItem.id ||
                                        multiple.indexOf(dataItem.id) !== -1 ?
                                        <div className="content">{dataItem.answer}</div>
                                        : null
                                } */}
                            </div>
                        ))
                    ) : (
                        <div>No data found ! </div>
                    )}
            </div>
            <section className="metric">
                <div>
                    <h2 className="measure-head">Common Equivalent Measurements</h2>
                    <div className="flex-container">
                        <div className="center">
                            <h2>Conventional measure</h2>
                            <p className="flex">1/4 teaspoon</p>
                            <p className="flex">1/2 teaspoon</p>
                            <p className="flex">1 teaspoon</p>
                            <p className="flex">3 teaspoon</p>
                            <p className="flex"> 2 tablespoon</p>
                            <p className="flex">4 tablespoon</p>
                            <p className="flex">5 1/3 tablespoon</p>
                            <p className="flex">8 tablespoon</p>
                            <p className="flex">10 2/3 tablespoon</p>
                            <p className="flex">12 tablespoon</p>
                            <p className="flex">16 tablespoon</p>
                            <p className="flex">2 cups</p>
                            <p className="flex">4 cups</p>
                        </div>
                        <div className="center">
                            <h2>Conventional Equivqlent</h2>
                            <p className="flex">-- -- -- </p>
                            <p className="flex">-- -- -- </p>
                            <p className="flex">-- -- -- </p>
                            <p className="flex">1 tablespoon</p>
                            <p className="flex">1/8 cup</p>
                            <p className="flex">1/4 cup</p>
                            <p className="flex">1/3 cup</p>
                            <p className="flex">1/2 cup</p>
                            <p className="flex">2/3 cup</p>
                            <p className="flex">3/4 cup</p>
                            <p className="flex">1 cup, 1/2 pint</p>
                            <p className="flex">1 point</p>
                            <p className="flex">1 quart</p>

                        </div>
                        <div className="center">
                            <h2> Approximate Metric Equivalent</h2>
                            <p className="flex">1 milliliters</p>
                            <p className="flex">2 milliliters</p>
                            <p className="flex">5 milliliters</p>
                            <p className="flex">15 milliliters</p>
                            <p className="flex">30 milliliters</p>
                            <p className="flex">50 milliliters</p>
                            <p className="flex">75 milliliters</p>
                            <p className="flex">125 milliliters</p>
                            <p className="flex">150 milliliters</p>
                            <p className="flex">175 milliliters</p>
                            <p className="flex">250 milliliters</p>
                            <p className="flex">500 milliliters</p>
                            <p className="flex">1 liter</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};