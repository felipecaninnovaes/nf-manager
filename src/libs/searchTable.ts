type ColumnDefinitionType<T, K extends keyof T> = {
	key: K;
	header: string;
	tableName: string;
	width?: number;
};

interface IFilter<T, K extends keyof T> {
	rows: Array<T>;
	value: string;
	columns: Array<ColumnDefinitionType<T, K>>;
}

interface ICollums<T, K extends keyof T> {
	columns: Array<ColumnDefinitionType<T, K>>;
}

export const searchFilter = <T, K extends keyof T>({
	rows,
	value,
	columns,
}: IFilter<T, K>) => {
	return rows?.filter((row) => {
		return columns.some((column) => {
			return (
				String(row[column.key as unknown as keyof T])
					.toLowerCase()
					.indexOf(value.toLowerCase()) > -1
			);
		});
	});
};
