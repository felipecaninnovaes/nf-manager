import { Rows } from "@/libs/convert";

interface IPagination<T, K extends keyof T> {
    dataPage: T[];
    currentPage: number;
    rowsPerPage: number;
}

interface IPaginationResult<T, K extends keyof T> {
    currentRows: Array<T>;
    totalPages: number;
    numbers: Array<number>;
}

export const pagination = <T, K extends keyof T>({
    dataPage,
    currentPage,
    rowsPerPage,
}: IPagination<T, K>): IPaginationResult<T, K> => {
    const lastIndex = currentPage * rowsPerPage;
    const firstIndex = lastIndex - rowsPerPage;
    const currentRows = dataPage.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(dataPage.length / rowsPerPage);
    const numbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    return { currentRows, totalPages, numbers };
};


interface PaginatedTableProps {
    currentPage: number;
    setCurrentPage: (newPage: number) => void;
	data: Rows[];
	itemsPerPage: number;
}

export function usePagination({ data, itemsPerPage, currentPage, setCurrentPage }: PaginatedTableProps) {

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    const numbersOfPages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return { currentData, handlePageChange, currentPage, totalPages, numbersOfPages };
}