
//Api'den gelen verileri sınıflandırmak için Angular'da interface kullanılır.
//export == public(.net)
export interface Car{
    carId:number;
    carName:string;
    brandId:number;
    colorId:number;
    modelYear:number;
    dailyPrice: number;
    description:string;
}