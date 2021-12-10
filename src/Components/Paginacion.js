import { Pagination } from 'react-bootstrap';

const Paginacion = (props) => {
    if(props.paginacion === 1){
        
    }
    return (
        <>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Next />
            </Pagination>
        </>
    );
};

export default Paginacion;