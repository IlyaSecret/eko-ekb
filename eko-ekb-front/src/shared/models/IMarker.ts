export interface IMarker {
  id: number,
  title: string,
  address: string,
  lngLat: [number, number],
  type: string[]
}

export interface IPoint {
  id?: number,
  ingLat: {
    cord1: number,
    cord2: number
  },
  type: string[],
  openTime: string,
  closeTime: string,
  title: string,
  address: string
}