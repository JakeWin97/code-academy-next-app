export interface IPagination {
	productsPerPage: number,
    totalProducts: number
    paginate: (page:number) => void
}