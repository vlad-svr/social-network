import React from 'react';
import s from './Paginator.module.css';


const Paginator = ({currentPage, onPageChanged, totalValueCount, pageSize}) => {
    const pagesCount = Math.ceil(totalValueCount / pageSize)

    const pages = new Array(pagesCount)
        .fill('')
        .map((_, index) => ++index)

    return  (
        <ul className={s.page_list}>
            {pages.map(item => {
                const selected = (item === currentPage) ? s.selected_page : ''
                return <li className={s.page_li + ' ' + selected}
                           key={item}
                           onClick={() => onPageChanged(item)}
                >{item}</li>
            })}
        </ul>
    )
}

export default Paginator
