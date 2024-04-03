export interface Page<T>{
  totalPages:number;
  totalElements:number,
  size:number,
  content:T[]
}
