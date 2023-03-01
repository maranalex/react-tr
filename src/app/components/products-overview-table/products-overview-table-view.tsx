import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { Button, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Link } from 'react-router-dom';

export interface ProductsOverviewTableData {
    id: string;
    productCategory: string;
    productName: string;
    price: number;
}

interface ProductsOverviewTableViewProps {
    dataSource: Array<ProductsOverviewTableData>;
}

export const ProductsOverviewTableView: React.FC<ProductsOverviewTableViewProps> = ({
    dataSource
}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataSource.map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.productCategory}
                            </TableCell>
                            <TableCell align="right">{row.productName}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">
                                <Button component={Link} to={'/product-details/' + row.id}>
                                    {'>'}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
