import Grade from "../Models/Grade";

class CalculateService {

    public calculateAverage = (numbers: Grade[]): number => {
        let sum = 0;

        numbers.forEach((number) => {
            sum += (number.value * number.weight) / 100;
        });

        sum = Math.round(sum);

        return sum;
    }

}

const calculateService = new CalculateService();
export default calculateService;