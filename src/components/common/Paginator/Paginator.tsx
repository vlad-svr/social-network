import React, {useState} from 'react';
import cn from 'classnames'
import s from './Paginator.module.css';
import rightArrowImage from '../../../assets/images/nextPage.png'
import leftArrowImage from '../../../assets/images/prevPage.png'


type PropsType = {
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    totalValueCount: number
    pageSize: number
    portionSize?: number
}


const Paginator: React.FC<PropsType> = ({currentPage = 1, onPageChanged = x => x,
                                            totalValueCount, pageSize,
                                            portionSize = 10}) => {
    const pagesCount = Math.ceil(totalValueCount / pageSize)

    const pages = new Array(pagesCount)
        .fill('')
        .map((_, index) => ++index)

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber *portionSize

    const onPrevPortionPage = () => setPortionNumber(portionNumber - 1)
    const onNextPortionPage = () => setPortionNumber(portionNumber + 1)


    return  (
        <div className={s.pagination}>
            { portionNumber > 1 &&
            <span className={s.button} onClick={onPrevPortionPage}>
                <img className={s.arrow} src={leftArrowImage} alt='leftArrow'/>
            </span>}
            <ul className={s.page_list}>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(item => {
                    return <li className={cn({[s.selected_page]: item === currentPage}, s.page_li)}
                               key={item}
                               onClick={() => onPageChanged(item)}
                    >{item}</li>
                })}
            </ul>
            { portionNumber < portionCount &&
            <span className={s.button} onClick={onNextPortionPage}>
                <img className={s.arrow} src={rightArrowImage} alt='rightArrow'/>
            </span>}
        </div>
    )
}

export default Paginator
