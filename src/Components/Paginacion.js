import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginacion = (props) => {
    const numerosPaginas = []

    for (let i = 1; i <= Math.ceil(props.totalPublicaciones/props.ultimaPagina); i++) {
        numerosPaginas.push(i);
    }

    return (
        <Pagination>
            {
                numerosPaginas.map(numero => (
                    <Pagination.Item onClick={()=> props.paginas(numero)}>{numero}</Pagination.Item>
                ))
            }
        </Pagination>
        // <nav>
        //     <ul className='pagination'>
        //         {
        //       numerosPaginas.map( numero => (
        //             <li key={numero} className='page-item'>
        //                 <a href='!#' className='page-link'>
        //                     {numero}
        //                 </a>
        //             </li>
        //            ))
        //              }
        //     </ul>
        // </nav>
    );
};

export default Paginacion;