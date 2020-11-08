import React from 'react'
import Paginator from './Paginator';
import {create} from 'react-test-renderer'

describe('Paginator component tests:', () => {
    const component = create(<Paginator totalValueCount={19} pageSize={1} portionSize={10}/>)
    const instance = component.root
    test('pages count is 11 but should be showed only 10', () => {
        const liCount = instance.findAllByType('li')
        expect(liCount.length).toBe(10)
    })
    test('if pages count is more then 10 button NEXT should be present', () => {
        const button = instance.findAllByType('span')
        expect(button.length).toBe(1)
    })
})