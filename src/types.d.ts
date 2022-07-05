export interface Item {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

export type ItemCart = {
  id : number;
  quantity : number;
}