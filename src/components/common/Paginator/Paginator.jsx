import s from "./Paginator.module.scss";
import React, {useState} from "react";
import classNames from 'classnames';
import BlueButton from "../BlueButton/BlueButton";

const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={s.pagination}>
            {portionNumber > 1 &&
            <div className={s.navButton}>
                <BlueButton content={"PREV"}
                            onClick={() => {
                                setPortionNumber(portionNumber - 1)
                            }}/>
            </div>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => <button key={p} onClick={() => onPageChanged(p)}
                                    href="!#"
                                    className={classNames(s.pageNumber, currentPage === p && s.currentPage)}>{p}</button>
                )}

            {portionCount > portionNumber &&
            <div className={s.navButton}>
                <BlueButton content={"NEXT"}
                            onClick={() => {
                                setPortionNumber(portionNumber + 1)
                            }}/>
            </div>}
        </div>
    );
}
;

export default Paginator;
