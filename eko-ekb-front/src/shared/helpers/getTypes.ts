import { FormGroup } from "@angular/forms";
import { AppComponent } from "src/app/app.component";

const typesNames = {
    isPaper: 'Бумага',
    isPlactic: 'Пластик',
    isMetal: 'Металл',
    isGlass: 'Стекло',
    isBattery: 'Батарейки',
    isLamp: 'Лампочки',
    isClothes: 'Одежда',
    isOther: 'Другое',
}

export const getPointTypes = (types: FormGroup): string[] => {
    const result = [];
    const typesObj = types.value;
    for (let key in typesObj) {
        if (typesObj[key]) {
            // @ts-ignore
            result.push(typesNames[key]);
        }
    }
    return result;
}