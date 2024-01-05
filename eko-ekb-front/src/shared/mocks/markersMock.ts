import {IMarker, IPoint} from "../models/IMarker";

export const Markers: IPoint[] = [
  {
    id: 1,
    title: 'Нефтеперерабатывающая тема',
    address: 'Ул. Крауля, 63',
    ingLat:  {
      cord1: 60.5998641837524,
      cord2: 56.84460847588218
    },
    type: ['Бумага'],
    openTime: '12:00',
    closeTime: '20:00'
  },
  {
    id: 1,
    title: 'Нефтеперерабатывающая тема',
    address: 'Ул. Крауля, 52',
    ingLat: {
      cord1: 60.56660235027675,
      cord2: 56.835664532314865
    },
    type: ['неБумага'],
    openTime: '12:00',
    closeTime: '20:00'
  }
]
