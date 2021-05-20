import { useStoreon } from 'storeon/react'
import { Pagination } from 'react-bootstrap'

const MyPag = () => {
    const { dispatch, table } = useStoreon('table');
    let total = table.sortedData ? table.sortedData.length : table.data.length
    let active = table.page
    let limit = table.limit
    let items = [];
    for (let number = 1; number <= Math.ceil(total / limit); number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => dispatch('table/changed', { page: number })}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <Pagination style={{ margin: 5 }}>{items}</Pagination>
    )
}
export default MyPag