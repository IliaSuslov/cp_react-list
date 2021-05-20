import { useStoreon } from "storeon/react";
import { Table, FormControl } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import { onChange, onClick } from '../api'
import { useEffect } from 'react'

const Thead = () => {
    const { dispatch, table } = useStoreon('table');
    return (
        <thead>
            <tr>
                {table.headers.map((h, i) => {
                    return (
                        <th key={i}>
                            {h.head !== 'number' ? <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text
                                        id="inputGroup-sizing-default"
                                        onClick={() => onClick(dispatch, h.head)}
                                    >{h.head}</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    onChange={e => onChange(dispatch, h.head, e.target.value)}
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup> : <h3>№</h3>}
                        </th>)
                })}
            </tr>
        </thead>
    )
}
const Tbody = () => {
    const { table } = useStoreon('table');
    return (
        !table.sortedData ?
            table.data.filter((v, i) => i < (table.limit * table.page)
            ).map((b, i) =>
                <tbody key={i}>
                    <tr>
                        <td>{i + 1}</td>
                        <td>{b.name}</td>
                        <td>{b.age}</td>
                        <td>{b.skill}</td>
                    </tr>
                </tbody>
            ) :
            table.sortedData.filter((v, i) => i < (table.limit * table.page)).map((b, i) =>
                <tbody key={i}>
                    <tr>
                        <td>{i + 1}</td>
                        <td>{b.name}</td>
                        <td>{b.age}</td>
                        <td>{b.skill}</td>
                    </tr>
                </tbody>
            )
    )
}
function MyTable() {
    const { dispatch, table } = useStoreon('table');

    useEffect(() => {
        dispatch('filter')
    }, [dispatch, table.filter, table.sort_direction])

    return (
        <Table striped bordered hover>
            <Thead />
            <Tbody />
        </Table>
    )
}

export default MyTable
