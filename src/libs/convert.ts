export type Collunms = {
	key: string;
	value: string;
};

export type Rows = {
	value: Collunms[];
};

function convertUnknownToString<T>(item: T): string | undefined {
    // se o item for number, boolean ou string retorna o item convertido para string
    if (typeof item === "number" || typeof item === "boolean" || typeof item === "string") {
        return String(item);
    }
    return undefined;
}

export function mapToRows<T>(dataTable: T[], keys: (keyof T)[] | string[]): Rows[] {
    return dataTable.map((item: unknown) => {
      const row: Rows = {
        value: keys.map((key: unknown) => ({ key: convertUnknownToString(key) as string, value: convertUnknownToString((item as Record<string, unknown>)[key as string]) as string })),
      };
      return row;
    }, []);
  }
